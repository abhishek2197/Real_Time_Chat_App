const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const TestSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    }
},{ collection : 'test' });

const Test = module.exports = mongoose.model('Test', TestSchema);

module.exports.getTestById = function(id, callback){
  Test.findById(id, callback);
}

module.exports.getTestByTestname = function(name, callback){
  const query = {name: name}
  Test.findOne(query, callback);
}

module.exports.addTest = function(newTest, callback){

      newTest.save(callback);
}

module.exports.Load =function(callback)
{
Test.find({},callback);
//console.log(callback);
}

module.exports.Delete =function(name,callback)
{
Menu.deleteOne({ "name" :name } ,callback);
//console.log(callback);
}
