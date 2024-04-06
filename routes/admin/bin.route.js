const express = require("express");

const routes = express.Router();

const binController = require("../../controllers/admin/bin.controller.js");

routes.get('/', binController.index);

routes.patch('/restore/:id', binController.restoreItem);

routes.delete('/permanently-deleted/:id', binController.permanentlyDeleted);

module.exports = routes;