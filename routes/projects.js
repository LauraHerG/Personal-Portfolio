let express = require('express');
let router = express.Router();
//let mongoose = require('mongoose');

//connect to model
let Projects = require('../models/projects');

//Manage routes
router.get('/', (req, res, next) => {
    Projects.find((err, ProjectsList) => {
        if(err){
            return console.error(err);
        }else{
            //console.log(projectsList);
            res.render('portfolio/list', {title: 'Project Information', ProjectsList: ProjectsList})
        }
    });
});

// to open add product page
router.get('/add', (req, res, next) => {
    res.render('portfolio/add', {title: 'Add Project'})
});

// insert product data into mongoDB collection
router.post('/add', (req, res, next) => {
    //getting data from form
    let newProject = Projects({
        "name": req.body.pname,
        "company": req.body.pcompany,
        "information": req.body.pinfo
    });

    //insert data into the mongoDB
    Projects.create(newProject, (err, Project) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/portfolio')
        }
    });
});

//Retrieve data from MongoDB and Open it in view (FORM)
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Projects.findById(id, (err, projectToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            //write code to display data in view
            res.render('portfolio/edit', { title : 'Edit Project', project: projectToEdit})
        }
    });
});

//write code to store updated data into MongoDB
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedProject = Projects({
        "_id": id,
        "name": req.body.pname,
        "company": req.body.pcompany,
        "information": req.body.pinfo
    });

    Projects.updateOne({_id: id}, updatedProject, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/portfolio');
        }
    });
});

//to delete documents from the collection
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Projects.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/portfolio');
        }
    });
});

module.exports = router;