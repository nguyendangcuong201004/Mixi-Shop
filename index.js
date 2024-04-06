const express = require("express");
const env = require("dotenv");
env.config();
const systemConfig = require("./configs/system.js");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();

const routesClient = require("./routes/client/index.route.js")
const routesAdmin = require("./routes/admin/index.route.js");

const port = process.env.PORT;


const database = require("./configs/databse.js");

database.connect();

app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))

app.locals.prefixAdmin = systemConfig;

routesClient(app);
routesAdmin(app);



app.listen(port, () => {
    console.log(`Chạy trên cổng ${port}`);
})