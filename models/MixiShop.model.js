const mongoose = require("mongoose");

const MixiSchema = new mongoose.Schema({
    title: String,
    category: String,
    price: String,
    image: String,
    status: String,
    deleted: Boolean
});

const MixiShop = mongoose.model('MixiShop', MixiSchema, "mixishops");

module.exports = MixiShop;