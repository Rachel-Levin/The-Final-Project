const articlesRouter = require('express').Router();

// const { celebrate, Joi } = require('celebrate');

const{
  getArticles,
  createArticle,
  deleteArticle,
} = require('../controllers/articles');

articlesRouter.get('/articles', getArticles);

articlesRouter.post('/articles', createArticle);

articlesRouter.delete('/articles/:id', deleteArticle);

module.exports = articlesRouter;
