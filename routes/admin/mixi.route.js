const express = require("express");

const routes = express.Router();

const mixiController = require("../../controllers/admin/mixi.controller.js");

routes.get('/', mixiController.index);

routes.patch('/change-status/:status/:id', mixiController.changeStatus);

routes.patch('/change-multi', mixiController.changeMulti);

routes.patch('/delete/:id', mixiController.deleteItem);

module.exports = routes;