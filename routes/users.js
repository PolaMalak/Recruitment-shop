var express = require('express');
var router = express.Router();
const DbUser = require('../database/users');
const bodyParser = require('body-parser');
const multer = require('multer');
var upload = multer({
    dest: 'uploads'
});
router.use(bodyParser.json());

router.post('/login', async (req, res, next) => {
    var response = await DbUser.login({ email: req.body.email, password: req.body.password });
    console.log(response);

    if (response.user) {
        res.render('index', { title: response.user.name });
    } else {
        res.render('login', { err: response.err });
    }

});

router.get('/profile', function (req, res, next) {
    res.render('profile');
});

router.use('/signup', upload.any(), async (req, res, next) => {
    var val = req.body;
    var files = req.files;
    console.log(files);

    let user = {
        name: val.name,
        email: val.email,
        password: val.password,
        gender: val.Gender,
        country: val.country,
        city: val.city,
        address: val.address,
        role: val.user_job,
        experience_years: val.experience,
        description: val.description,
        skills: val.skills,
        role:2,
        files:files
    };

    var err = await DbUser.signUp(user);
    console.log("err = " + err)

    if (err!=null ) {
        return res.render('signUp', { err: err });
    }
    res.render('index', { title: 'done' });
});

router.post('/signupcompany', upload.any(), async (req, res, next) => {
    console.log('here');
    var val = req.body;
    var files = req.files;
    console.log(files);

    let user = {
        name: val.name,
        email: val.email,
        password: val.password,
        company_name: val.company_name,
        country: val.country,
        city: val.city,
        address: val.address,
        Foundation: val.Foundation,
        description: val.description,
        role:3,
        files:files
    };

    var err = await DbUser.CompanysignUp(user);
    console.log("err = " + err)

    if (err!=null ) {
        return res.render('signUpCompany', { err: err });
    }
    res.render('index', { title: 'done' });
});

module.exports = router;
