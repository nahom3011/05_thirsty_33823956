// Create a new router
const express = require("express");
const router = express.Router();

//Define our data
var shopData = {shopName: "The Final Draft", 
                productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"], 
                shopInfo: [
                    {
                        location: "Fulham Broadway",
                        manager: "Dennis Richard",
                        address: "22 Summer Road, SW6 9JG"
                    },
                    {
                        location: "Greenwich",
                        manager: "Rob Harris",
                        address: "100 Greenwich Street, SE10 7TP"
                    },
                    {
                        location: "Waterloo",
                        manager: "Shaun Mullen",
                        address: "25 Waterloo Road, SE1 8LK"
                    }]
                };

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData)
});

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });

 router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
  res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!. ' + 'We will send an email to you at ' + req.body.email);
});

// Survey page
router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});

router.post("/submitted", (req,res) => {
    res.send(req.body.first + req.body.last + req.body.email + req.body.age + req.body.student)
})

 // Export the router object so index.js can access it
module.exports = router;