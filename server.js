'use strict';
(function() {  //jf lets get out of the global scope
    var env =   process.env.NODE_ENV    =   process.env.NODE_ENV || 'development';  //jf let the system know we are in development mode

    //standard module require statements
    var express = require('express');

    // var logger = require('morgan');
    // var bodyParser = require('body-parser');
    var mongoose = require('mongoose');
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;

    var app = express();

    var config = require('./config')[env];

    require('./server/config/express') (app, config);

    require('./server/config/mongoose') (config);

    //-------------------------------

    var server;

    //------------------------Mongoose code

    var Menu = require('./server/models/menuModel');

    var menu = new Menu();
    Menu.find({}, function (err, collection) {
        //console.log ('The collection is '+collection);
        if (collection.length === 0) {
            Menu.create({
                language:'en',
                appTitle:'Multi-vision',
                appTitleMessage:'-Extreme tech training',
                mainJumbotron:'Multi-vision',
                mainJumbotronMessage:'lorem ip Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                home:'Home',
                footer: '2015 Multi-vision'  //jf &copy;
            });
        }
    });
    Menu.findOne({language: 'en'}, function (error, menu) {
        if (menu) {
            require('./server/config/routes') (app, menu);
        }
    });

    //------------------------Mongoose code

    //-------------Passport code----------
    var User = mongoose.model('User');

    passport.serializeUser (function (user, done) {
        console.log('passport.serializeUser (function (user is %s\n', user);
        if (user) {
            done(null, user._id);
        }
    });

    passport.deserializeUser(function(id, done) {
        User.findOne({_id:id}).exec(function(err, user) {
            console.log('passport.deserializeUser id is%s\npassport.deserializeUser user is%s\n', id, user);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    });

    passport.use(new LocalStrategy(function (username, password, done) {
        User.findOne({username: username}, function (err, user) {
            console.log('server err is %s\n server user is %s', err, user);

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));

    //-------------Passport code----------

    // //----------Routes-----------

    //---------Define servers listen
    server =    app.listen(config.port);
    console.log('server listening on port ' + config.port + ' on ' + config.mongodbServer + '...');

})();