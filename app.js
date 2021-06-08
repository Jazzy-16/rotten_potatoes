// require libraries
const express = require('express');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Handlebars = require('handlebars');
require('dotenv').config();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


const app = express();
const reviews = require('./controllers/reviews')(app);
const comments = require('./controllers/comments')(app);


// The following line must appear AFTER const app = express() and before your routes!
// app.use(bodyParser.urlencoded({ extended: true }), methodOverride('_method'));
app.use(express.json()); // new version of bodyParser
app.use(express.urlencoded());
app.use(express.static('public'));
app.set('view engine', 'handlebars');

// middleware
// set the templating engine -> handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main',
handlebars: allowInsecurePrototypeAccess(Handlebars)}))

//connects to the server with Mongo DB vilent

mongoose.connect ('mongodb+srv://jazzy:12345@cluster0.qdt3y.mongodb.net/test',
 { useNewUrlParser: true, useUnifiedTopology: true},() => console.log('Connected to database...'));

 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'MongoDB connection error:'));




//const Review = mongoose.model('Review', {
    //title: String,
    //movieTitle: String,
    //description: String,
  //});

// get home route -> sending message
// app.get('/', (req, res) => {
//     // res.send('Hello World!');
//     res.render('reviews-index', { reviews: reviews });
// })

    //console.log(req.body.title);
    //res.render('reviews-new', {});
 

  

// define app route
app.listen(process.env.PORT||2000, () =>{
    console.log(`App listening on port ${process.env.PORT}!`);
})

module.exports = app;
