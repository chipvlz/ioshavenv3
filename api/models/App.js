const mongoose = require('mongoose');
const randomatic = require('randomatic');
const Schema = mongoose.Schema
const appSchema = new Schema({
  name: {
    type: String,
    default: 'No name'
  },
  uid: {
    type: String,
    unique: true,
    required: true
  },
  image: {
    type: String,
    default: 'http://via.placeholder.com/150x150'
  },
  unsigned: String,
  signed: String,
  version: String,
  description: {
    type: String,
    default: 'No description'
  },

  views: Number,
  downloads: Number,
  size: Number
})

module.exports = mongoose.model('App', appSchema)
