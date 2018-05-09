const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
const { dbUrl } = require('./config/database')
const { favouriteCountries } = require('./seeds')
const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

server.use(cors());

server.use(parser.json());
server.use(parser.urlencoded({extended:true}));

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://holidaytracker.eu.auth0.com/.well-known/jwks.json'
  }),
  aud: 'https://favourite-countries.com',
  issuer: "https://holidaytracker.eu.auth0.com/",
  algorithms: ['RS256']
})

MongoClient.connect(dbUrl, function (err, client) {
  if(err){
    console.log(err);
    return;
  }

  const db = client.db('favourite_countries');
  console.log('Connected to favourites countries database');

  //GET ALL

  server.get('/api/countries', authCheck, function (req, res) {
    console.log(req.user.sub)
    db.collection('countries').find({userId: req.user.sub}).toArray(function (err, result) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }

      res.status(200)
      res.json(result);
      console.log("Database retrieved");
    });
  });

  //POST

  server.post('/api/countries/', authCheck, function(req, res) {
    console.log(req.body)
    db.collection('countries').find({userId: req.user.sub, alpha3Code: req.body.alpha3Code}).toArray(function(err, result){
    if (result.length !== 0){
            res.status(409);
            res.send()
            return
    }
    else{
      db.collection('countries').save({
        userId: req.user.sub,
        alpha3Code: req.body.alpha3Code,
        area: req.body.area,
        borders: req.body.borders,
        flag: req.body.flag,
        latlng: req.body.latlng,
        name: req.body.name,
        nativeName: req.body.nativeName,
        region: req.body.region}, function (err, result){
      if(err){
              console.log(err);
              res.status(500);
              res.send();
            }
            res.status(201);
            res.json(result);
         })
       }
    })
  })

  //DELETE

  server.delete('/api/countries', authCheck, function (req, res) {
    if(req.query.id){
      db.collection('countries').deleteOne({_id: ObjectID(req.query.id)}, function(err){
        if(err){
          console.log(err)
          res.status(500)
          res.send()
        }
        res.status(204)
        res.send()
        console.log('favourite deleted')
      })
    }
    else{
      db.collection('countries').deleteMany(function(err){
        if(err){
          console.log(err);
          res.status(500);
          res.send();
        }
        res.status(204);
        res.send();
        console.log('database deleted');
      });
    }
  });

  server.listen(5000, function () {
    console.log('Listening on port 5000');
  })

})