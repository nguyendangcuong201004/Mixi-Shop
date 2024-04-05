const express = require("express");

const routes = express.Router();

const dashboardController = require("../../controllers/admin/dashboard.controller.js");

routes.get('/', dashboardController);

module.exports = routes;