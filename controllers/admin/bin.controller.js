const MixiShop = require("../../models/MixiShop.model.js");
const paginationHelper = require("../../helpers/pagination.helper.js")


//[GET] admin/bin
module.exports.index = async (req, res) => {

    const bins = await MixiShop.find({
        deleted: true
    })

    const countRecords = await MixiShop.countDocuments({
        deleted: true
    });
    const objectPagination = paginationHelper(req, countRecords);

    res.render("admin/pages/bin/index.pug", {
        pageTitle: "Thùng rác",
        records: bins,
        objectPagination: objectPagination
    });
};

//[PATCH] admin/bin/restore/:id
module.exports.restoreItem = async (req, res) => {
    
    const id = req.params.id;

    await MixiShop.updateOne({
        _id: id
    }, {
        deleted: false
    })

    res.redirect('back')
}
// [DELETE] admin/bin/permanentlyDeleted/:id

module.exports.permanentlyDeleted = async (req, res) => {
    const id = req.params.id;

    await MixiShop.deleteOne({
        _id: id
    })

    res.redirect('back')
}