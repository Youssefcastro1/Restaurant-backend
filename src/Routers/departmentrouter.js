const express = require('express');
const deparmentcontroller = require('../Controllers/departmentController');
const router = express.Router();

router.get('/listdepartments', deparmentcontroller.listDepartments);

module.exports = router;