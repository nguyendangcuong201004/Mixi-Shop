const express = require("express");

const mixiController = require("../../controllers/client/mixi.controller.js");

const routes = express.Router();

routes.get('/', mixiController)

module.exports = routes;