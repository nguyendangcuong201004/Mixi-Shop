const express = require("express");

const routes = express.Router();

const mixiController = require("../../controllers/admin/mixi.controller.js");

routes.get('/', mixiController.index);

routes.get('/:status/:id', mixiController.changeStatus);


module.exports = routes;