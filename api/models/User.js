const mongoose = require('mongoose');
const randomatic = require('randomatic');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) return next(err)
    this.password = hash
    next()
  })
})

userSchema.statics.authenticate = function (obj) {
  return new Promise((resolve, reject) => {
    this.findOne({$or: [
        {email: obj.email},
        {username: obj.username}
    ]})
    .then(doc => {
      bcrypt.compare(obj.password, doc.password, (err, result) => {
        if (!result) reject({})
        else resolve(doc)
      })
    })
    .catch(err => {
      reject('err')
    })
  });
}

module.exports = mongoose.model('User', userSchema)
