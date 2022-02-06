const express = require("express");
const path = require("path");
const routes = require("./routes/")

const app = express();
const port = 3000;

app.listen(process.env.PORT || port, () => {
    console.log(`Express server starts listening on port ${port}.`);
});

// set template engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views/'));

// use static middleware to specify static content location
app.use(express.static(path.join(__dirname, 'public/')));

// use custom router
app.use('/', routes());