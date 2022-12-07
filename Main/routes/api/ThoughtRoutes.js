const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThoughts,
} = require('../../controllers/ThoughtController');

// /api/students
router.route('/').get(getThoughts).post(createThought);

// /api/students/:studentId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThoughts);

module.exports = router;
