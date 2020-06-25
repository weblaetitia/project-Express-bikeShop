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
  // Initialisez la variable de session dataCardBikes
  console.log(req.session.dataCardBikes)
  if (req.session.dataCardBikes === undefined) {
    req.session.dataCardBikes =[];
  }
  res.render('index', {dataBikes:dataBikes});
});


/* GET shopping-cart page. */
router.get('/cart', function(req, res, next) {
  if (Object.entries(req.query).length === 0) {
    res.render('cart', {dataCardBikes:req.session.dataCardBikes})
  } else {
    var exist = false;
  if (req.session.dataCardBikes.length === 0) {
    req.session.dataCardBikes.push(req.query)
  } else {
    req.session.dataCardBikes.forEach(element => {
      console.log(element.name)
      console.log(req.query.name)
      if (element.name === req.query.name) {
        element.quantity++
        exist = true
      }
    })
    if (exist === false) {
      req.session.dataCardBikes.push(req.query)
    }
  }
  res.render('cart', {dataCardBikes:req.session.dataCardBikes})
  }

  
});

/* GET delete-shop page. */
router.get('/delete-cart', function(req, res, next) {
   var objectToDelete = req.query.delete
   req.session.dataCardBikes.splice(objectToDelete,1)
   res.render('cart', {dataCardBikes:req.session.dataCardBikes} )
});

/* POST update-shop page. */
router.post('/update-cart', function(req, res, next) {
  var newQuantity = req.body.quantity
  var i = req.body.number
  req.session.dataCardBikes[i].quantity = newQuantity
  res.render('cart', {dataCardBikes:req.session.dataCardBikes})
});



module.exports = router;
