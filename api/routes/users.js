const express = require('express');
const router = express.Router()
const User = require('../models/User')
const randomatic = require('randomatic');




router.post('/create', (req, res) => {
  if (req.body.email &&
      req.body.username &&
      req.body.password &&
      req.body.password == req.body.passwordConfirm)
    {
      User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      })
      .then(doc => {
        return User.authenticate({
          email: doc.email,
          username: doc.username,
          password: req.body.password
        })
      })
      .then(doc => {
        req.session.password = req.body.password
        req.session.email = doc.email
        if (req.body.redirect) return res.redirect(req.body.redirect)
        return res.json(doc)
      })
      .catch(err => {
        if (req.body.redirect) return res.redirect('back')
        return res.json(err)
      })
    }
  else res.status(500).json('error: missing args or args do not match')
})

router.post('/login', function (req, res) {
  User.authenticate({
    email: req.body.email || req.body.usernameOrEmail,
    username: req.body.username || req.body.usernameOrEmail,
    password: req.body.password
  })
  .then(doc => {
    req.session.password = req.body.password
    req.session.email = doc.email || req.body.usernameOrEmail
    req.session.username = doc.username || req.body.usernameOrEmail
    let origin = req.get('origin')
    let rgx = /:\/\/(.[^/]+)/
    let domain = origin.match(rgx)[1].split(':')[0]
    req.session.cookie.domain = domain
    if (req.body.redirect) return res.redirect(req.body.redirect)
    res.json(doc)
  })
  .catch(err => {
    return res.json(err)
  })
})


async function authorize(req, res, next) {
  if (!req.session.email || !req.session.password) return res.json(null)
  req.auth = await User.authenticate({
    email: req.session.email,
    username: req.session.username,
    password: req.session.password
  })
  .catch(err => {
    res.json(null)
  })
  next()
  // return response
}


router.get('/auth', function (req, res) {
  if (!req.session.email || !req.session.password) return res.json('no session')
  User.authenticate({
    email: req.session.email,
    username: req.session.username,
    password: req.session.password
  })
  .then(doc => {
    // req.session.password = req.session.password
    // req.session.email = doc.email
    res.json(doc)
  })
  .catch(err => {
    return res.json('catch')
  })
})

router.post('/logout', function (req, res) {
  if (req.session) req.session.destroy(err => {
    if (err) return next(err)
    return res.redirect(req.body.redirect)
  })
})

router.all('/', (req, res) => {
  res.json('asdf')
})

router.get('/editing', authorize, function (req, res) {
  User.findOneAndUpdate(
    {email: req.auth.email, username: req.auth.username},
    {$bit: {editing: {xor: 1}}},
    {new: true}
  ).then(doc => {
    res.json(doc)
  })
})

module.exports = router
