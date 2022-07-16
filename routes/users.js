const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('user list');
})

router.get('/new', (req, res) => {
    res.send('user new form');
})

router.post('/', (req, res) => {
res.send('Create User');
})

router.get('/:id', (req, res) => {
    req.params.id;
    res.send('Get User with ID');
})
module.exports = router;