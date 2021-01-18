const { Schema, model } = require('mongoose');

const pizzaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  ingredients: Object,
  typeDough: String,
});

module.exports = model('Pizza', pizzaSchema);
