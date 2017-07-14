var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res) {
    res.send('hello, /users ' + req.params.name);
});

module.exports = router;