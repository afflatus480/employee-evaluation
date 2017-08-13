var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){


// app.METHOD(PATH, HANDLER)

app.get('/signup', authController.signup);


app.get('/signin', authController.signin);



app.get('/emplRanking', function (req, res) {
  res.Red('emplRanking')
})



app.post('/signup', passport.authenticate('local-signup',  { 
	successRedirect: '/dashboard',
	failureRedirect: '/signup'
	}
));


app.get('/dashboard',isLoggedIn, authController.dashboard);


app.get('/logout', function(req,res){
 req.logOut();
 req.session.destroy(function (err) {
        res.redirect('/'); /
    });
});


app.post('/signin', passport.authenticate('local-signin',  { 
	successRedirect: '/dashboard',
    failureRedirect: '/signin'}
));


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');


}


}






