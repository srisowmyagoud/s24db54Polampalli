var express = require('express');
const doors_controllers= require('../controllers/doors');
var router = express.Router();
/* GET costumes */
router.get('/', doors_controllers.doors_view_all_Page );
// GET request for one car
router.get('/:id', doors_controllers.doors_detail);

// PUT request for updating a specific car
router.put('/doors/:id', doors_controllers.doors_update_put);
module.exports = router;
