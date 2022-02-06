const express = require('express');
const path = require('path');
const router = express.Router();

module.exports = () => {
    router.get("/", (req, res) => {
        // res.send("Test message:\nThis is a \"Hello\" message from Express.");
        // res.sendFile(path.join(__dirname, 'public/index.htm'));
        res.render('pages/index', {
            assNumber: '1',
            semester: 'COMP229-003 W22',
            engine: 'EJS'
        });
    });
    router.get('/contact', (req, res) => {
        res.render('pages/contact', {
            engine: '<p>This is rendered by EJS</p>'
        });
    });
    router.get('/:subpage', (req, res) => {
        res.sendFile(path.join(__dirname, `../public/${req.params.subpage}.htm`));
    });

    return router;
}