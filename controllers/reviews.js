const Review = require('../models/review');

module.exports = function(app) {

// get home route -> sending message
app.get('/', (req, res) => {
    Review.find().lean()
      .then(reviews => {
        res.render('reviews-index', { reviews: reviews });
      })
      .catch(err => {
        console.log(err);
      })
  })

// New Route
app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {title: "Post a Review"})
  });

  // Create a new review

  app.post('/reviews', (req, res) => {
    Review.create(req.body)
        .then((review) => {
            console.log(review);
            res.redirect(`/reviews/${review._id}`)
        })
        .catch((err) => {
            console.log(err.message);
        })
})

    app.get('/reviews/:id', (req, res) => {
        Review.findById(req.params.id)
        .then((review) => {
          res.render('reviews-show', { review: review })
        }).catch((err) => {
          console.log(err.message);
        })
      })
    
      app.get('/reviews/:id/edit', (req, res) => {
          Review.findById(req.params.id, function (err, review) {
            res.render('reviews-edit', { review: review });
          }).catch((err) => {
            console.log(err.message);
          })
      })
    
      //to update (we use put)
      app.put('/reviews/:id', (req, res) => {
          Review.findByIdAndUpdate(req.params.id, req.body)
          .then(review => {
             res.redirect(`/reviews/${review._id}`)
          })
          .catch(err => {
            console.log(err.message)
          })
      })
    
      //logic for deleting a review
      app.delete('/reviews/:id', function (req, res) {
          console.log("DELETE review")
        Review.findByIdAndRemove(req.params.id).then((review) => {
          console.log(`Successfully deleted: ${review}`)  
          res.redirect('/');
        }).catch((err) => {
          console.log(err.message);
        })
      })
    }
