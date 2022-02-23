const Article = require('../models/articles');

const next = require('../middlewares/errorHandler');

const NotFoundError = require('../errors/NotFoundError');

const ValidationError = require('../errors/NotFoundError');

const NoRightsError = require('../errors/NoRightsError');

const {
  articleNotFound,
  cantDelete,
  idIsIncorrect,
} = require('../utils/constants');

const getArticles = (req, res) => {
  Article.find({})
    .orFail(new NotFoundError(articleNotFound))
    .then((articles) => {
      res.send(articles.map((article) => article));
    })
    .catch((err) => {
      if (err.name === 'NotFoundError') {
        next(new NotFoundError(articleNotFound), req, res);
      } else {
        next(err, req, res);
      }
    });
};

const createArticle = (req, res) => {
  // res.status(201).send(req.user);
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;

  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner: req.user._id,
  })
    .then((article) => res.status(201).send(article.toJSON()))
    .catch((err) => {
      if (err.name === 'NotFoundError') {
        next(new NotFoundError('User not found'), req, res);
      }
      if (err.name === 'ValidationError') {
        next(new ValidationError(err), req, res);
      } else {
        next(err, req, res);
      }
    });
};

const deleteArticle = (req, res) => {
  Article.findById(req.params.id)
    .orFail(new NotFoundError(articleNotFound))
    .then((article) => {
      if (article.owner !== req.user._id) {
        next(new NoRightsError(cantDelete), req, res);
      } else {
        return article.remove()
          .then(() => res.send({ message: `Article  '${article.title}' was removed` }));
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError(idIsIncorrect), req, res);
      }
      if (err.name === 'NotFoundError') {
        next(new NotFoundError(articleNotFound), req, res);
      } else {
        next(err, req, res);
      }
    });
};

module.exports = {
  getArticles,
  createArticle,
  deleteArticle,
};
