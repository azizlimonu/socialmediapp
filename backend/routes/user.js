const express = require('express');
const {
  updateUser,
  getUsers,
  updateDP
} = require('../controllers/user');
const router= express.Router();

router.route('/')
  .get(getUsers)
  .patch(updateUser);

router.route('/dp')
  .patch(updateDP);

module.exports = router;