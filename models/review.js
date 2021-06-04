const mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var reviewSchema = new Schema({
  title: String,
  description: String,
  movieTitle: String
});

const Review = mongoose.model('Review',reviewSchema);

module.exports = Review;