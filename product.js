const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    email:String,
    mobile:String
});

module.exports= mongoose.model("Test", productSchema);