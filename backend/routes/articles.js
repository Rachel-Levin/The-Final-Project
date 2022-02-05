const articlesRouter = require('express').Router();

const { celebrate, Joi } = require('celebrate');

const { checkedLink } = require('../middlewares/linkValidation');

const {
  getArticles,
  createArticle,
  deleteArticle,
} = require('../controllers/articles');

articlesRouter.get('/articles', getArticles);

articlesRouter.post(
  '/articles',
  celebrate({
    body: Joi.object().keys({
      keyword: Joi.string().required(),
      title: Joi.string().required(),
      text: Joi.string().required(),
      // date: Joi.string().required(),
      source: Joi.string().required(),
      link: checkedLink,
      image: checkedLink,
    }).unknown(true),
  }),
  createArticle,
);

articlesRouter.delete(
  '/articles/:id',
  celebrate({
    body: Joi.object().keys({
      user: Joi.object().keys({
        _id: Joi.string().hex().required(),
      }),
    }),
    params: Joi.object()
      .keys({
        id: Joi.string().hex().required(),
      }),
  }),
  deleteArticle,
);

module.exports = articlesRouter;
