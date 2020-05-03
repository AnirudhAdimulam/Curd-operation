const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  person_name: {
    type: String
  },
 
  email: {
    type: String
  },
  mobile_no: {
    type: Number
  },
  camp_chose: {
    type: String

  }


},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);