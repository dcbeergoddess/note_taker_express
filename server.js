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



//======= listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
