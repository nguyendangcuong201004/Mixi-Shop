const express = require("express");
const multer  = require('multer');
const storage = require("../../helpers/storageMulter.helper.js");

const routes = express.Router();

const upload = multer({ storage: storage });

const mixiController = require("../../controllers/admin/mixi.controller.js");

routes.get('/', mixiController.index);

routes.patch('/change-status/:status/:id', mixiController.changeStatus);

routes.patch('/change-multi', mixiController.changeMulti);

routes.patch('/delete/:id', mixiController.deleteItem);

routes.get('/create', mixiController.create);

routes.post('/create', upload.single('image'), mixiController.createPost);

routes.get('/detail/:id', mixiController.detail);

module.exports = routes;