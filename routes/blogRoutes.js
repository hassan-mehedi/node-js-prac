const express = require("express");
const routes = express.Router();
const { findData, deleteData } = require("../controllers/controller");

routes.get("/:id", findData);

routes.get("/delete/:id", deleteData);

module.exports = routes;
