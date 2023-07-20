let mongoose = require('mongoose');

//Create Model of Contact
let contactModel = mongoose.Schema(
    {
        "name" : String,
        "address" : String,
        "message" : String
    },
    {
        collection: "Contact"
    }
);

module.exports = mongoose.model('Contact', contactModel);