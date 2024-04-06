const MixiShop = require("../../models/MixiShop.model.js");
const filterHelper = require("../../helpers/filter.helper.js");
const paginationHelper = require("../../helpers/pagination.helper.js");
//[GET] /admin/products

module.exports.index = async (req, res) => {


    // Filter///////////////////////////////////////////////////////////////

    const find = {
        deleted: false
    };


    if (req.query.status){
        find.status = req.query.status;
    }

    const filterStatus = filterHelper(req);

    // Filter///////////////////////////////////////////////////////////////////////

    // Search//////////////////////////////////////////////////////////////////////

    if (req.query.keyword){
        const regex = new RegExp(req.query.keyword, "i");
        find.title = regex;
    }

    // Search//////////////////////////////////////////////////////////////////////

    //Pagination

    const countRecords = await MixiShop.countDocuments(find);
    const objectPagination = paginationHelper(req, countRecords);
    
    //Pagination

    const mixiShop = await MixiShop
    .find(find)
    .limit(objectPagination.limitItems)
    .skip(objectPagination.skip);

    res.render("admin/pages/mixishop/index.pug", {
        pageTitle: "MixiShop - Tổng quan sản phẩm",
        records: mixiShop,
        filterStatus: filterStatus,
        keyword: req.query.keyword,
        objectPagination: objectPagination
    });
};


// [PATCH] /admin/products/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
    const status = req.params.status;
    const id = req.params.id;

    await MixiShop.updateOne({
        _id: id
    }, {
        status: status
    })

    res.redirect("back");
};

//[PATCH] /admin/products/change-multi
module.exports.changeMulti = async (req, res) => {
    const type = req.body.type;
    let id = req.body.ids;
    id = id.split(", ");

    switch (type){
        case "active":
            await MixiShop.updateMany({
                _id: id
            }, {
                status: type
            })
            break;
        case "inactive":
            await MixiShop.updateMany({
                _id: id
            }, {
                status: type
            })
            break;
        case "delete-all":
            await MixiShop.updateMany({
                _id: id
            }, {
                deleted: true
            })
            break;
        default:
            break;
    }

    res.redirect('back')
}

//[PATCH] /admin/products/delete
module.exports.deleteItem = async (req, res) => {

    const id = req.params.id;

    await MixiShop.updateOne({
        _id: id
    }, {
        deleted: true
    })

    res.redirect('back');
};