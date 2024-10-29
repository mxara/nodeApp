// ---------------------- LIBRARIES ----------------
const express = require('express'); // Импорт библиотеки Express JS
const Contact = require('../models/contact');
const router = express.Router()

router.get("/contacts", (req, res) => {
    const title = "Contacts";
    Contact
        .find()
        .then((contacts) => res.render("contacts", { contacts, title}))
        .catch((error) => {
            console.log(error);
        });
})


module.exports = router