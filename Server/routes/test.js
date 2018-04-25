const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Test=require('../models/test');
router.post('/add', (req, res, next) => {
	console.log("hehe");
    let  newTest= new Test({
      name: req.body.name
      
    });
  
    Test.addTest(newTest, (err, test) => {
      if(err){
        res.json({success: false, msg:'Failed to Test'});
      } else {
        res.json({success: true, msg:'Test added'});
      }
    });
  });
  module.exports = router;
