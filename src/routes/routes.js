const express = require('express');
const router = express.Router();

const {
  Create,
  Index,
  Update,
  Delete,
} = require('../controllers/QuestionController');

router.get('/', Index);

router.post('/', Create);

router.put('/:id', Update);

router.delete('/:id', Delete);

module.exports = router;
