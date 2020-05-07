//===== DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

//==== initial port
const PORT = processs.env.PORT || 3000;

//========EXPRESS


app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(epxress.static("public"));

//====ROUTING 


//========= page routes


//========= api routes

//======== data routes


//======= listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
