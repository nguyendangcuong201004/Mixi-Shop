const MixiShop = require("../../models/MixiShop.model.js");
const filterHelper = require("../../helpers/filter.helper.js");
//[GET] /admin/products

module.exports.index = async (req, res) => {


    // Filter

    const find = {
        deleted: false
    };

    const filterStatus = [
        {
            name: "Tất cả",
            status: "",
            class: ""
        },
        {
            name: "Hoạt động",
            status: "active",
            class: ""
        },
        {
            name: "Dừng hoạt động",
            status: "inactive",
            class: ""
        }
    ];

    if (req.query.status){
        find.status = req.query.status;
    }

    if (req.query.status){
        const index = filterStatus.findIndex((button) => {
            return button.status == req.query.status;
        })
        filterStatus[index].class = "active";
    }
    else filterStatus[0].class = "active";

    // Filter


    const mixiShop = await MixiShop.find(find);
    res.render("admin/pages/mixishop/index.pug", {
        pageTitle: "MixiShop - Tổng quan sản phẩm",
        records: mixiShop,
        filterStatus: filterStatus
    });
};

