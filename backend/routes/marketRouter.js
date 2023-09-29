const routes = require("express").Router();
const MarketController = require("../controllers/marketController");

routes.route("/create").post((req, res) => MarketController.create(req, res));
routes.route("/list").get((req, res) => MarketController.getAll(req, res));

module.exports = routes;