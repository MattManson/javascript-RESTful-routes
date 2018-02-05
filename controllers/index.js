const express = require('express');
const router = new express.Router();

router.use('/films', require('./films'));

router.get('/', function(req, res){
  res.json({data: 'Welcome!'});
});

// router.get('/about', function(req, res){
//   res.json({data: 'about all films'});
// });

module.exports = router;
