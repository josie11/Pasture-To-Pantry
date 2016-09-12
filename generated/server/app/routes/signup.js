var router = require('express').Router();
var User = require('../../db/models/user.js');

router.post('/', function(req, res, next){
  User.create(req.body)
  .then(function(user){
    res.status(201).send(user);
  })
  .catch(next);
});
module.exports = router;
