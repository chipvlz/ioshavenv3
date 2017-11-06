const mongoose = require('mongoose');
const randomatic = require('randomatic');
const Schema = mongoose.Schema
const appSchema = new Schema({
  name: String,
  uid: {
    type: String,
    unique: true,
    required: true
  },
  image: String,
  unsigned: String,
  signed: String,
  version: String,
  description: String,
  ratings: Array,
  downloads: Number,
  size: String
})

module.exports = mongoose.model('App', appSchema)
