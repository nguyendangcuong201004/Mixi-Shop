const MixiShop = require("../../models/MixiShop.model.js");
const filterHelper = require("../../helpers/filter.helper.js");
const paginationHelper = require("../../helpers/pagination.helper.js");
const prefixAdmin = require("../../configs/system.js");
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
    .skip(objectPagination.skip)
    .sort({ positon: "desc" });

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

    const infoProduct = await MixiShop.findOne({
        _id: id
    })
    req.flash('success', `Cập nhật trạng thái sản phẩm ${infoProduct.title} thành công!`);

    res.redirect("back");
};

//[PATCH] /admin/products/change-multi
module.exports.changeMulti = async (req, res) => {
    const type = req.body.type;
    const ids = req.body.ids.split(", ");

    switch (type){
        case "active":
            await MixiShop.updateMany({
                _id: { $in: ids }
            }, {
                status: type
            })
            req.flash('success', `Cập nhật trạng thái thành công!`);
            break;
        case "inactive":
            await MixiShop.updateMany({
                _id: { $in: ids }
            }, {
                status: type
            })
            req.flash('success', 'Cập nhật trạng thái thành công!');
            break;
        case "delete-all":
            await MixiShop.updateMany({
                _id: { $in: ids }
            }, {
                deleted: true
            })
            req.flash('success', 'Sản phẩm đã di chuyển vào thùng rác!');
            break;
        case "change-position":
            for (item of ids){
                let [id, positon] = item.split('-');
                await MixiShop.updateOne({
                    _id: id
                }, {
                    positon: positon
                })
            }
            req.flash('success', 'Cập nhật vị trí thành công!');
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

    req.flash('success', 'Sản phẩm đã xóa thành công!');

    res.redirect('back');
};

//[GET]  /admin/products/create
module.exports.create = (req, res) => {
    res.render("admin/pages/mixishop/create.pug", {
        pageTitle: "Thêm sản phẩm"
    });
}

//[POST]  /admin/products/create
module.exports.createPost = async (req, res) => {
    
    if (req.body.positon){
        req.body.positon = parseInt(req.body.positon);
    }
    else {
        const countRecords = await MixiShop.countDocuments({});
        req.body.positon = countRecords + 1;
    }

    if (req.file){
        req.body.image = `/uploads/${req.file.filename}`;
    }

    console.log(req.file)


    const records = new MixiShop(req.body);
    await records.save();

    req.flash("success", "Thêm mới sản phẩm thành công!");


    res.redirect(`${prefixAdmin}/products`);
}

// [GET] /admin/products/detail
module.exports.detail = async (req, res) => {

    const id = req.params.id;

    const record = await MixiShop.findOne({
        _id: id
    })

    res.render("admin/pages/mixishop/detail.pug", {
        pageTitle: record.title,
        record: record
    })
}