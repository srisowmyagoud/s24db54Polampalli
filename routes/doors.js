const express = require('express');
const router = express.Router();
 
const doors = [
  { Type: 'Flush', model: 'Wood', Price: 20000 },
  { Type: 'Dutch', model: 'Timber', Price: 25000 },
  { Type: 'Louver', model: 'Plywood', Price: 15000 },
];
 
router.get('/', (req, res) => {
  res.render('doors', { title: 'Search Results', doors });
});
 
module.exports = router;