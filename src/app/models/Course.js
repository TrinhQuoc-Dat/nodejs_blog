const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Course = new Schema({
    name: {type: String, maxLength: 255},
    // discription: {type: String, maxLength: 650},
    // image: {type: String, maxLength: 255},
    age : {type: String, maxLength: 3},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  
});

module.exports = mongoose.model('Course', Course);