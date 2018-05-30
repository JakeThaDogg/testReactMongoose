var express = require('express');
var router = express.Router();
var User = require('../models/user-example');
let cors = require('cors')


router.use(cors())

router.get('/', (req, res) => {
    console.log('Ceci est un get')
    res.send('Biiiiite')
});

//Route to login user into session
router.post('/login', (req, res) => {
    console.log('Ceci est un post')
    if (req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/profile');
            }
        })
    }
})

//Route to register new user
router.post('/register', (req, res) => {
        var userData = {
          email: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          postal_code: req.body.postal_code,
          age: req.body.age,
          password: req.body.password
        }
        User.create(userData, function (error, user) {
          if (error) {
            console.log(error)
            console.log('ERROR: merde')
            res.status(500).end()
          } else {
            console.log('utilisateur ajouté')
            req.session.userId = user._id
            console.log(req.session.userId);
            return res.redirect('/profile')
            res.status(200).end()
          }
        })
})

//Route to get user info
router.get('/profile', (req, res) => {
    console.log('On est a profil et c est cool')
})

//Route to logout user of session
router.get('/logout', (req, res) => {

});

module.exports = router;
