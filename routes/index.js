var express = require('express');
var router = express.Router();

// My bikes
var dataBikes = [
  {
    id : 1,
    name : 'BIKO45',
    price : 679,
    photo: '/images/bike-1.jpg'
  },
  {
    id : 2,
    name : 'ZOOK7',
    price : 799,
    photo: '/images/bike-2.jpg'
  },
  {
    id : 3,
    name : 'LIKO89',
    price : 839,
    photo: '/images/bike-3.jpg'
  }, 
  {
    id : 4,
    name : 'GEWO8',
    price : 1249,
    photo: '/images/bike-4.jpg'
  },
  {
    id : 5,
    name : 'KIWIT',
    price : 899,
    photo: '/images/bike-5.jpg'
  },
  {
    id : 6,
    name : 'NASAY',
    price : 1399,
    photo: '/images/bike-6.jpg'
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dataBikes:dataBikes});
});

// Mon panier
dataCardBikes = [];

/* GET shopping-cart page. */
router.get('/shop', function(req, res, next) {
  dataCardBikes.push(req.query)
  res.render('shop', {dataCardBikes:dataCardBikes} )
});

/* GET delete-shop page. */
router.get('/delete-shop', function(req, res, next) {
   var objectToDelete = req.query.delete
   dataCardBikes.splice(objectToDelete,1)
   res.render('shop', {dataCardBikes:dataCardBikes} )
});

/* POST update-shop page. */
router.post('/update-shop', function(req, res, next) {
  var newQuantity = req.body.quantity
  var i = req.body.number
  dataCardBikes[i].quantity = newQuantity
  res.render('shop', {dataCardBikes:dataCardBikes})
});



module.exports = router;
