const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
const { dbUrl } = require('./config/database')
const { favouriteCountries } = require('./seeds')

server.use(cors());

server.use(parser.json());
server.use(parser.urlencoded({extended:true}));

const mongodb = MongoClient.connect(dbUrl, function (err, client) {
  if(err){
    console.log(err);
    return;
  }

const db = client.db('favourite_countries');
console.log('Connected to favourites countries database');
 db.collection('countries').remove({})
    favouriteCountries.forEach((country) => {
    db.collection('countries').insert(country)
    console.log('added to db')
  })
  setTimeout(function(){
    process.exit(0)
  }, 2000)
})

