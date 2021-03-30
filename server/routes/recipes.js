const express = require('express');
const router = express.Router();
const path = require('path');
const fetch = require('node-fetch');

// GET ALL
router.get('/', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.sendFile('recipes.json', { root: path.resolve(__dirname, '../resources') }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent');
    }
  })
});

router.get('/:id', function (req, res) {
  fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + req.params.id)
    .then(res => res.json())
    .then(data => res.json(data));
})

module.exports = router;