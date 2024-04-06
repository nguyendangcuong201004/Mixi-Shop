const dashboardRoutes = require("./dashboard.route.js");
const mixiRoutes = require("./mixi.route.js");
const binRoutes = require("./bin.route.js");
const CONFIG_SYSTEM = require("../../configs/system.js");

module.exports = (app) => {
    app.use(CONFIG_SYSTEM + '/dashboard', dashboardRoutes);
    app.use(CONFIG_SYSTEM + '/products', mixiRoutes);
    app.use(CONFIG_SYSTEM + '/bin', binRoutes);
}