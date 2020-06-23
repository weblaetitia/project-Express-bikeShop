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

dataCardBikes = [
  {
  id : 1,
  name : 'BIKO45',
  price : 679,
  photo: '/images/bike-1.jpg',
  quantity: 1
},
{
  id : 2,
  name : 'ZOOK7',
  price : 799,
  photo: '/images/bike-2.jpg',
  quantity: 5
},
{
  id : 3,
  name : 'LIKO89',
  price : 839,
  photo: '/images/bike-3.jpg',
  quantity: 3
}, 
{
  id : 4,
  name : 'GEWO8',
  price : 1249,
  photo: '/images/bike-4.jpg',
  quantity: 0
},
{
  id : 5,
  name : 'KIWIT',
  price : 899,
  photo: '/images/bike-5.jpg',
  quantity: 1
},
{
  id : 6,
  name : 'NASAY',
  price : 1399,
  photo: '/images/bike-6.jpg',
  quantity: 2
}];

/* GET shopping-cart page. */
router.get('/shop', function(req, res, next) {
  res.render('shop', {dataCardBikes:dataCardBikes});
});

module.exports = router;
