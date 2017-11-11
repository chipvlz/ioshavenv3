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
    {upsert: true, setDefaultsOnInsert: true, new: true}
  )
  .then(doc => {
    // if (!req.body.uid) return App.findOne({uid: newUID})
    return res.json(doc)
  })
  // .then(doc => {
  //   return res.json(doc)
  // })
  .catch(err => {
    res.json(err)
  })
})

router.get('/get/:uid?', (req, res) => {
  if (req.params.uid) {
    App.findOneAndUpdate(
      {uid: req.params.uid},
      {$inc: {views: 1}},
      {new: true}
    )
    .then(doc => {
      res.json(doc)
    })
  } else {
    App.find()
    .then(doc => {
      res.json(doc)
    })
  }
})


router.post('/update', (req, res) => {
  App.findOneAndUpdate(
    {uid: req.body.data.uid},
    req.body.data,
    {new: true}
  ).then(doc => {
    res.json(doc)
  })
})

router.post('/remove', (req, res) => {
  App.findByIdAndRemove(req.body._id)
  .then(doc => {
    res.json(doc)
  })
})

router.get('/install/:uid', (req, res) => {
  App.findOneAndUpdate(
    {uid: req.params.uid},
    {$inc: {downloads: 1}}
  )
  .then(doc => {
    res.redirect(doc.signed)
  })
  .catch(err => {
    res.status(404).end()
  })
})


module.exports = router
