const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
server.use(cors());

server.use(parser.json());
server.use(parser.urlencoded({extended:true}));

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if(err){
    console.log(err);
    return;
  }

  const db = client.db('favourite_countries');
  console.log('Connected to favourites countries database');

  //GET ALL

  server.get('/api/countries', function (req, res) {
    db.collection('countries').find().toArray(function (err, result) {
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

  server.post('/api/countries', function (req, res) {
    db.collection('countries').save(req.body, function (err, result) {
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(201);
      res.json(result.ops[0]);

      console.log("Object Saved")
    })
  })

  //DELETE

  server.delete('/api/countries', function (req, res) {
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
  });

  server.listen(5000, function () {
    console.log('Listening on port 5000');
  })

})