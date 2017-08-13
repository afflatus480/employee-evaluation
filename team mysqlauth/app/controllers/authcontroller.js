var exports = module.exports = {}


var path= require("path");

exports.signup = function(req,res){

	res.render('signup'); 

}

exports.signin = function(req,res){
	res.redirect('/');


}

exports.dashboard = function(req,res){

	res.render('dashboard'); 

}

exports.emplRanking = function(req,res){

	res.render('emplRanking'); 

}


exports.logout = function(req,res){


  req.session.destroy(function(err) {
  res.redirect('/');
  });

}

// app.METHOD(PATH, HANDLER)