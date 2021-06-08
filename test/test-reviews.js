const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const Review = require('../models/review');


chai. use(chaiHttp);

describe('Reviews', () => {

    //Test Index
    it('should index ALL reviews on / GET', (done) => {
        chai.request(server)
            .get('/').end((err, res) => {
                //200 -> good 404 -> template not found
              res.should.have.status(200);
              res.should.be.html;
              done();
            })
            .catch((err) =>{
                console.log(err.message);
            })
      });

    // Test New
    // Test Create
    // Test Show
    // Test Edit
    // Test Update
    // Test Delete
});

//Test reviews
    it('should display new form on /reviews/new GET', (done) => {
        chai.request(server)
        .get(`/reviews/new`)
            .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html
            done();
            });
    });

// Sample review

    const sampleReview =     {
        "title": "Super Sweet Review",
        "movie-title": "La La Land",
        "description": "A great review of a lovely movie."
    }

// Test Create and detail page
    it('should create a review and show detail for it', async (done) => {
        // var review = Review.create(sampleReview);
        Review.create(sampleReview).then((err, data) => {
            chai.request(server)
                .get(`/reviews/${data._id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
        });
        done();
    });

   