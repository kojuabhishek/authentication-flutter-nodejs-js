//Initialization
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



mongoose.connect("mongodb+srv://kojuabhishek:Jethalal123!@cluster0.ws4anum.mongodb.net/notesdb").then(function()
{
   app.get("/", function(req,res){
        
         const response = {message : "API Works!"};
         res.json(response);
    });
    
    const noteRouter = require('./routes/Note');
    app.use("/notes", noteRouter);

});




//Starting the server on a PORT
app.listen(5000, function(){
    console.log("Server started at PORT: 5000");
});