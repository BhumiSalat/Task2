var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('addstudent',{ title: 'Insert Student'});
});

router.post('/create', function(req,res, next){
  var student={
    en_no: req.body.en_no,
    fullname:req.body.fullname,
    email:req.body.email,
    mobileno:req.body.mobileno,
    city:req.body.city
  };
  console.log(student.fullname);
  fs.writeFile("s2.json", JSON.stringify(student), err => { 
     // Checking for errors 
      if (err) throw err;  
     //Done
    console.log("Done...");  
  });
}); 

router.post('/student', function(req,res,next){
  fs.readFile("s1.json", function(err, data) { 
      
    // Checking for errors 
    if (err) throw err; 
   
    // Converting to JSON 
    const stud = JSON.parse(data); 
     
    // Print users 
    console.log(stud);  
}); 

});


module.exports = router;
