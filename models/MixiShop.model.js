const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const MixiSchema = new mongoose.Schema({
    title: String,
    category: String,
    price: String,
    image: String,
    status: String,
    deleted: {
        type: Boolean,
        default: false
    },
    positon: Number,
    slug: { type: String, slug: "title", unique: true}
}, {
    timestamps: true
});

const MixiShop = mongoose.model('MixiShop', MixiSchema, "mixishops");

module.exports = MixiShop;