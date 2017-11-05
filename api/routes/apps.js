const express = require('express');
const router = express.Router()
const App = require('../models/App')
const randomatic = require('randomatic');

router.post('/modify', (req, res) => {
  let newUID = randomatic('Aa0', 5)
  App.findOneAndUpdate(
    {
      uid: req.body.uid || newUID
    },
    req.body.data || {},
    {upsert: true, setDefaultsOnInsert: true}
  )
  .then(doc => {
    if (!doc) return App.find({uid: newUID})
    return res.json(doc)
  })
  .then(doc => {
    return res.json(doc)
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/get/:uid', (req, res) => {
  App.find({uid: req.params.uid})
  .then(doc => {
    res.json(doc)
  })
})

module.exports = router
