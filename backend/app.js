const express = require("express");
const cors = require("cors");
const connect = require("./database/connect");
connect();

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)

});

const baseRouter = require("./routes/baseRouter");

router.use("/api", baseRouter);
