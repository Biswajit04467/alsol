const express = require('express');
const { postVisit, getData } = require('../controllers/visitController');
const router = express.Router();

router.post('/log-visit', postVisit);
router.get('/getData', getData);

module.exports = router;