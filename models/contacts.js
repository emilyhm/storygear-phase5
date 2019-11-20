const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    topic: { type: String, required: true},
    contact_comment: { type: String, required: true}
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;