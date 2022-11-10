const mongoose = require('mongoose');

// todo: create a schema
// 1. describe the structure of data: name, type of data for each field
// add schema type option object
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});
// todo 2: create a model
// Model name convention : Tour

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
