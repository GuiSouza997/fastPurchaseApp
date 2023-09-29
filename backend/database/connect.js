
const mongoose = require("mongoose");
//Conection in database
async function connect() {
  try {
    await mongoose.connect("mongodb+srv://gsouza26497:5kNCpaOJsYZfbGC8@cluster0.skodmzi.mongodb.net/fastpurchase");
    console.log("Banco de Dados: OK!")
  } catch (error) {
    console.log(`Error in conection: ${error}`)
  }

}

module.exports = connect;
