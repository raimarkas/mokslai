const mongoose = require('mongoose');

const visitorShema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

const Visitor = mongoose.model('visitors', visitorShema);
module.exports = Visitor;
