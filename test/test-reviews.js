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