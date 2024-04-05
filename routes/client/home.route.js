const express = require("express");
const homeController = require("../../controllers/client/home.controller.js");

const routes = express.Router();

routes.get('/', homeController);

module.exports = routes;