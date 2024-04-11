var express = require('express');
const doors_controllers= require('../controllers/doors');
var router = express.Router();
/* GET costumes */
router.get('/', doors_controllers.doors_view_all_Page );
/* GET detail food page */
router.get('/detail', doors_controllers.doors_view_one_Page);
//* GET create costume page */
router.get('/create', doors_controllers.doors_create_Page);
/* GET create update page */
router.get('/update', doors_controllers.doors_update_Page);
/* GET delete costume page */
router.get('/delete', doors_controllers.doors_delete_Page);

module.exports = router;