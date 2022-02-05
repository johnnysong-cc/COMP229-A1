const express = require('express');
const path = require("path");

const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Express server starts listening on port ${port}.`);
});

app.use(express.static(path.join(__dirname, 'static/')));

app.get("/", (req, res) => {
    // res.send("Test message:\nThis is a \"Hello\" message from Express.");
    res.sendFile(path.join(__dirname, 'static/index.htm'));
});
app.get("/#profile", (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.htm#profile'));
});
app.get("/#project", (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.htm#project'));
});
app.get("/#service", (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.htm#service'));
});
app.get("/#contact", (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.htm#contact'));
});