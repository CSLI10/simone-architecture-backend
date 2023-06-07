const express = require('express');
const router = express.Router();

const { 
  register,
  login
  } = require('../controllers/user_controller');

// router
//     .get('/', readData)
//     .get('/:id', readOne)
//     .post('/', createData)
//     .put('/:id', updateData)
//     .delete('/:id', deleteData);

router
  .post('/register', register)
  .post('/login', login)

module.exports = router;