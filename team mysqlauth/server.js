    var express    = require('express');
    var app        = express();
    var passport   = require('passport');
    var session    = require('express-session');
    var bodyParser = require('body-parser');
    var env        = require('dotenv').load();
    var exphbs     = require('express-handlebars');
    var path = require("path");

    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(bodyParser.json());
    app.use(session({ secret: 'rusty nacho',resave: true, saveUninitialized:true})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); 


    app.set('views', './app/views')
    app.engine('hbs', exphbs({extname: '.hbs'}));
    app.set('view engine', '.hbs');

    app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./app/views/signin.html"))
    });


    app.get('/emplRanking', function(req, res){
    res.sendFile(path.join(__dirname, "./app/views/emplRanking.html"))
    });
    
 
    var models = require("./app/models");


    var authRoute = require('./app/routes/auth.js')(app,passport);

    require('./app/config/passport/passport.js')(passport,models.user);

   	models.sequelize.sync().then(function(){
    console.log('Database functional')

    }).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
    });


	app.listen(8000, function(err){
		if(!err)
		console.log("Server is running"); else console.log(err)

	});




    