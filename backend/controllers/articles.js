const article = require('../models/articles');

const next = require('../middlewares/errorHandler');

const NotFoundError = require('../errors/NotFoundError');

const ValidationError = require('../errors/NotFoundError');

const getArticles = (req, res) => {
  article.find({})
    .orFail(new NotFoundError('Articles not found'))
    .then((articles) => {
      res.send(articles.map((article) => article));
    })
    .catch((err) => {
      if (err.name === 'NotFoundError') {
        next(new NotFoundError('Article not found'), req, res);
      } else {
        next(err, req, res);
      }
    });
};

// const createArticle = (req, res) => {
//   const { keyword, title, text, date, source, link, image } = req.body;

//   article.create({keyword, title, text, date, source, link, image, owner: req.user._id })
//     .then((article) => res.status(201).send(article.toJSON()))
//     .catch((err) => {
//       if (err.name === 'NotFoundError') {
//         next(new NotFoundError('User not found'), req, res);
//       }
//       if (err.name === 'ValidationError') {
//         next(new ValidationError('Users id is incorrect'), req, res);
//       }
//        else {
//         next(err, req, res);
//       }
//     });
// };

const createArticle = (req, res) => {
  const { keyword, title, text, date, source, link, image } = req.body;

  article.create({ keyword, title, text, date, source, link, image, owner: req.user._id })
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
  article.findByIdAndRemove(req.params.id)
    .orFail(new NotFoundError('Article not found'))
    .then((article) => { res.send(article.toJSON()); })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError('Users id is incorrect'), req, res);
      }
      if (err.name === 'NotFoundError') {
        next(new NotFoundError('User not found'), req, res);
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
