const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const invSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model('Inventory', invSchema);

// GET ALL
router.get('/', function (req, res) {
  Item.find({}, function (err, docs) {
    if (err) return res.send(err);
    res.send(docs);
  });
})

// GET ONE
router.get('/:id', function (req, res) {
  Item.findById(req.params.id, function (err, doc) {
    if (err) return res.send(err);
    res.send(doc);
  });
})

// POST
router.post('/', function (req, res) {
  const newItem = new Item(req.body);
  newItem.save( function (err, newItem) {
    if (err) return res.send(err);
  });
  res.send("easily done");
});

// PUT
router.put('/:id', function (req, res) {
  Item.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
    if (err) return res.send(err);
    res.send("easily done");
  });
})

// DEL
router.delete('/:id', function (req, res) {
  Item.findByIdAndDelete(req.params.id, function (err) {
    if (err) return res.send(err);
    res.send("Successful deletion");
  });
})
module.exports = router;