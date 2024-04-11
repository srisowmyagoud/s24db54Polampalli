var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var doors_controller = require('../controllers/doors');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// doors ROUTES ///
// POST request for creating a doors.
router.post('/doors', doors_controller.doors_create_post);
// DELETE request to delete doors.
router.delete('/doors/:id', doors_controller.doors_delete);
// PUT request to update doors.
router.put('/doors/:id', doors_controller.doors_update_put);
// GET request for one doors.
router.get('/doors/:id', doors_controller.doors_detail);
// GET request for list of all doors items.
router.get('/doors', doors_controller.doors_list);
module.exports = router;
