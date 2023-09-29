const router = require("express").Router();

const marketRouter = require("./marketRouter")

router.use("/market", marketRouter);

module.exports = router;