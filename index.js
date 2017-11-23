var express = require("express");
 var app = express();
 var bodyParser = require("body-parser");
 
  var campgrounds = [
   
   {name: "Alabama", image: "https://www.ua.edu/assets/img/ua-square-logo.png"},
   {name: "Florida", image: "http://foxsportsuniversity.com/wp-content/uploads/2012/08/FLORIDA.png"},
   {name: "Georgia", image: "http://fermatacollege.com/wp-content/uploads/2015/06/uga.png"}
   
   
   
   
   ];

     
 
 app.use(bodyParser.urlencoded({extended: true}));
 app.set("view-engine", "ejs");
 
 app.get("/", function(req, res) {
     
     res.render("landing.ejs");
     
 });
 
 
  app.get("/campgrounds", function(req, res) {
     

     
     res.render("campgrounds.ejs", {campgrounds: campgrounds});
     
 });
 
 app.post("/campgrounds", function(req, res) {

 var name = req.body.name,
  image = req.body.image;
 
  
  var newCampground = {name: name, image: image};
  
  campgrounds.push(newCampground);


  res.redirect("/campgrounds");
  
  
  
  
 });

app.get("/campgrounds/new", function(req, res) {
 
 res.render("new.ejs");
 
});
 
 
 
 
 app.listen(process.env.PORT, process.env.IP, function() {
     
     console.log("The app is running on the server");
     
 });
    
    
    
    
    
