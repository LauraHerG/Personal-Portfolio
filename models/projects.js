let mongoose = require('mongoose');

//Create Model of Projects
let projectsModel = mongoose.Schema(
    {
        "name" : String,
        "company" : String,
        "information" : String
    },
    {
        collection: "Projects"
    }
);

module.exports = mongoose.model('Projects', projectsModel);