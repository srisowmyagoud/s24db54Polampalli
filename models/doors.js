const mongoose = require("mongoose")
const doorsSchema = mongoose.Schema({
doors_type: String,
doors_model: String,
doors_price: Number
})
module.exports = mongoose.model("doors",
doorsSchema)