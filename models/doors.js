const mongoose = require("mongoose")
const doorsSchema = mongoose.Schema({
door_type: String,
door_model: String,
door_price: Number
})
module.exports = mongoose.model("doors",
doorsSchema)