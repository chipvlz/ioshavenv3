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
  icon: {
    type: String,
    default: 'http://lorempixel.com/250/250/'
  },
  banner: {
    type: String,
    default: 'http://lorempixel.com/1500/500/'
  },
  unsigned: String,
  signed: String,
  version: String,
  description: {
    type: String,
    default: 'No description'
  },
  descriptionObject: String,
  tags: String,
  views: Number,
  downloads: Number,
  size: Number
})

module.exports = mongoose.model('App', appSchema)
