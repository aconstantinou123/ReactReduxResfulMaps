const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
const { dbUrl } = require('./config/database');
const multer = require('multer');
const axios = require('axios')
var path = require('path');

server.use(cors());

server.use(parser.json({limit: '10mb'}));
server.use(parser.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname, 'files')))
// server.use(multer({ storage: storage }).array('tripPictures', 12))

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'files'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})
 
var upload = multer({ storage: storage })


MongoClient.connect(dbUrl, function (err, client) {
  if(err){
    console.log(err);
    return
  }

  const db = client.db('favourite_countries');
  console.log('Connected to favourites countries database');

  //GET ALL

  server.get('/api/countries', function (req, res) {
    db.collection('my_trips').find().toArray(function (err, result) {
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
 server.post('/api/countries/files', upload.array('tripPictures', 12), function(req, res){
   console.log(res)
    if (err) {
      res.json({
        error: err
      })
      return
    }
    db.collection('my_trips').save({
          flag: req.body.flag,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          latlng: req.body.latlng,
          name: req.body.name,
          description: req.body.description,
          photos: req.files
      }, function (err, result){
      if(err){
              console.log(err);
              res.status(500);
              res.send();
            }
            res.status(201);
            res.json(result);
            console.log('add to trips')
          })
        })
  

  //DELETE

  server.delete('/api/countries', function (req, res) {
    console.log(req.query.id)
    if(req.query.id){
      db.collection('my_trips').deleteOne({_id: ObjectID(req.query.id)}, function(err){
        if(err){
          console.log(err);
          res.status(500);
          res.send();
        }
        res.status(204);
        res.send();
        console.log('trip deleted');
      });
    }
    else{
    db.collection('my_trips').deleteMany(function(err){
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

  server.listen(5001, function () {
    console.log('Listening on port 5001');
  })

})