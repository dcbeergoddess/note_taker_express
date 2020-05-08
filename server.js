//===== DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

//==== initial port
const PORT = process.env.PORT || 3000;

//========EXPRESS


app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static('public'));

//====ROUTING 
    //========= page routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req,res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//========= api/data/JSON routes

//GET notes from database
app.get("/api/notes", function(req,res) {
  fs.readFile("./db/db.json", "utf8", function(error, data){
    if (error) throw error;
    data = JSON.parse(data);
    res.json(data);
    // console.log(data)
  });
});

//save/POST notes to database

app.post("/api/notes", function(req, res){
  const writeNote = {title: req.body.title, text: req.body.text, id: req.body.id };
  
  fs.readFile("./db/db.json", "utf8", function(error, data){
    if (error) throw error;
    data = JSON.parse(data);
    data.push(writeNote)
    data = JSON.stringify(data)
    console.log(data);
    fs.writeFile("./db/db.json", data, function(error){
      if (error) throw error
      res.json(writeNote)  
    });
  });
});

//DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

app.delete("/api/notes/:id"), function (req, res) {
}





//======= listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
