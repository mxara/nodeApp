const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchgema = new Schema({
    name: {
        type: String,
        reqired: true,
    },
    link: {
        type: String,
        reqired: true,
    },
}, { timestamps: true }) // сохраняем пост в DB

const Contact = mongoose.model('Contact', contactSchgema);

module.exports = Contact;
