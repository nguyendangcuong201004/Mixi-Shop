const express = require("express");

const routes = express.Router();

const mixiController = require("../../controllers/admin/mixi.controller.js");

routes.get('/', mixiController.index);

module.exports = routes;