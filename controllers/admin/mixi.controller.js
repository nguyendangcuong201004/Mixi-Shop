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

