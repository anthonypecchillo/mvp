// var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var webdriverio = require('webdriverio');

// app.use(express.static(path.join(__dirname + '../client/index.html')));
app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var jsonParser = bodyParser.json();

// 1. setup express endpoint that takes user input needed for a search
app.post('/searchSW', jsonParser, function(req, res) {
  // res.send(jsonParser);
  // req.body = bodyParser.json(data);
  // res.send(req.body);
  console.log('searchSW received this data: ', req.body);
  var logMe = '';
  
  //--------------------------------------------------
  var options = {
    desiredCapabilities: {
      browserName: 'chrome'
    }
  };

  webdriverio
    .remote(options)
    .init()
    .url('http://www.southwest.com')
    .title().then(function (title) {
      console.log('Title was: ' + title.value);
      logMe = title.value;
    })
    .click('#trip-type-one-way')
    .setValue('#air-city-departure', req.body.origin).keys("Tab")
    .setValue('#air-city-arrival', req.body.destination).keys("Tab")
    .setValue('#air-date-departure', req.body.date)
    .click('#jb-booking-form-submit-button')
    .getHTML('div#Out1CContainer label.product_price', false).then(function(html) {
      console.log('This is the html of that spot: ', html);
      res.send({priceHTML: html.slice(65, 68)});
    })
    // .getHTML('#faresOutbound tbody > tr > td.depart_column span.time', false).then(function(html) {
    //   console.log('This is the html of that spot: ', html);
    //   res.send({trows: html});
    // })
    .end();
  //--------------------------------------------------


});

app.listen(3000, function () {
  console.log('FlyCheap\'s server is listening on port 3000!');
});

module.exports = app;
