module.exports = (req, countRecords) => {
    const objectPagination = {
        currentPage: 1,
        limitItems: 4
    };

    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;

    objectPagination.totalPage = Math.ceil(countRecords / objectPagination.limitItems);
    if (req.query.page){
        objectPagination.currentPage = parseInt(req.query.page);
    }
    return objectPagination
}