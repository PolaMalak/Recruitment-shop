var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

/* GET home page. */
router.get('/login', function (req, res, next) {
    res.render('login' , {err:null});
});

router.all('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/signup', function (req, res, next) {
    res.render('signUp' , {err:null});
});

router.get('/companysignup', function (req, res, next) {
    res.render('signUpCompany' , {err:null});
});

router.get('/hr', function (req, res, next) {
    res.render('HR');
});

router.get('/admin', function (req, res, next) {
    res.render('admin');
});

router.get('/profile', function (req, res, next) {
    res.render('profile');

});

router.get('/addpost', function (req, res, next) {
    res.render('addpost');
});

router.get('/about', function (req, res, next) {
    res.render('about');
});

router.get('/contact-us', function (req, res, next) {
    res.render('contact-us');

});
router.get('/index', function (req, res, next) {
    res.render('index');

});
router.get('/adress_html', function (req, res, next) {
    res.render('adress_html');

});


module.exports = router;
