const MixiShop = require("../../models/MixiShop.model.js");

module.exports = async (req, res) => {

    const mixiShop = await MixiShop.find({
        
    });

    res.render("client/pages/mixi/index.pug", {
        pageTitle: "Sản phẩm MixiShop",
        records: mixiShop
    })
}