const marketModel = require("../models/marketModel")

class MarketController {
  async create(req, res) {
    const market = {
      name: req.body.name,
      description: req.body.description
    }

    await marketModel.create(market);

    res.json({ success: "success", message: "Mercado criado com sucesso." }).status(201)
  }

  getAll(req, res) {
    res.json({ success: "success", message: "Mercado criado com sucesso." }).status(200)
  }
}

module.exports = MarketController;