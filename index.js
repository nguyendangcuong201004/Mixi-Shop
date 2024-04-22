const express = require("express");
const env = require("dotenv");
env.config();
const systemConfig = require("./configs/system.js");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const moment = require("moment")

const app = express();

const routesClient = require("./routes/client/index.route.js")
const routesAdmin = require("./routes/admin/index.route.js");

const port = process.env.PORT;


const database = require("./configs/databse.js");

database.connect();

app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());

app.locals.prefixAdmin = systemConfig;
app.locals.moment = moment;

routesClient(app);
routesAdmin(app);



app.listen(port, () => {
    console.log(`Chạy trên cổng ${port}`);
})