const homeRoutes = require("./home.route.js");
const mixiRoutes = require("./mixi.route.js");

module.exports = (app) => {
    app.use('/', homeRoutes);

    app.use('/products', mixiRoutes)
}