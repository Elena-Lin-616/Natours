const express = require('express');
const userController = require('./../controllers/userController');
const usersRouter = express.Router();
usersRouter
  .route('/')
  .get(userController.getAllUsers)
  .put(userController.createUser);
usersRouter
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = usersRouter;
