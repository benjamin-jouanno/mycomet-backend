'use strict';

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var mongoose = require('mongoose');
var express = require('express');
var authRouter = express.Router();
var bodyParser = require('body-parser');
var User = mongoose.model('User');
var checkParams = require('../helpers/checkParams');

authRouter.use(bodyParser.urlencoded({ extended: false }));
authRouter.use(bodyParser.json());

  exports.register_new_user = function(req, res, next) {
    console.log(req.body);
    if (!checkParams(req.body, ["firstName", "lastName", "email", 
                              "phoneNbr", "password"])) {
      res.status(404).send({ result: false, message: "Veuillez ajouter les paramètres." });
    }

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create({
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      email : req.body.email,
      phoneNbr : req.body.phoneNbr,
      password : hashedPassword,

    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400// expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    }); 
  };

  exports.read_me = function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      User.findById(decoded.id, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
      });
    });
  };

  exports.login_user = function(req, res) {
    console.log(req.body)
    if (!checkParams(req.body, ["email", "password"])) {
      res.status(404).send({ result: false, message: "Veuillez ajouter les paramètres." });
    }
 
    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send({result: false, message: 'Error on the server.'});
      if (!user) return res.status(404).send({result: false, message: 'No user found.'});
      
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      
      res.status(200).send({ result: true, token: token });
    });
  };

  exports.logout = function(req, res) {
    res.status(200).send({ result: true, token: "" });
  }
