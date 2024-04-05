const express = require("express");

const env = require("dotenv");
env.config();

const systemConfig = require("./configs/system.js");

const app = express();

const routesClient = require("./routes/client/index.route.js")
const routesAdmin = require("./routes/admin/index.route.js");

const port = process.env.PORT;


const database = require("./configs/databse.js");

database.connect();

app.use(express.static('public'))

app.locals.prefixAdmin = systemConfig;

routesClient(app);
routesAdmin(app);



app.listen(port, () => {
    console.log(`Chạy trên cổng ${port}`);
})