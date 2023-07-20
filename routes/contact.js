let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Contact = require('../models/contact');

//Manage routes
router.post('/add', (req, res, next) => {
    // Getting data from the form
    const { name, address, message } = req.body;
  
    // Creating a new instance of the Contact model with the form data
    const newContact = new Contact({
      name,
      address,
      message,
    });
  
    // Inserting data into the MongoDB
    newContact.save((err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        res.redirect('/contact');
      }
    });
  });  

module.exports = router;