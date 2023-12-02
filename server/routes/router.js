const express = require('express');
const {
  createCourse,
  createStudent,
  createStudents,
  addCourse,
  marksEntry,
  getStudents,
  getStudent,
} = require('../controllers/adminController');

const router = express.Router();

// router.post('/create/course', createCourse);
// router.post('/create/student', createStudent);
router.get('/create', createStudents);
router.get('/join', addCourse);

router.post('/marks', marksEntry);
router.post('/get', getStudents);
router.post('/getone', getStudent);

module.exports = router;
