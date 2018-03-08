var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=>{
  res.render('index', { title: 'Games-R-Us' });
});

/* GET games page with parameters passed from home page. */
router.get('/games', (req, res, next)=>{
  let name = req.query.name;
  let address = req.query.address;
  let city = req.query.city;
  let state = req.query.state;
  res.render('games', { title: 'Your Games-R-Us Selections',
    'username': name,
    'address': address,
    'city': city, "state": state });
});

module.exports = router;
