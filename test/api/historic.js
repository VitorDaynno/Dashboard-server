var mongoose = require('mongoose');
var request     = require('supertest');
var chai        = require('chai');
var expect      = chai.expect;

describe('historic', function(){
    var server;

    before(function() {
        server = require('../../server');
    });
   
    after(function() {
        mongoose.connection.close();
        server.close();
    });

    describe('/v1/historic', function() {
        it('should return a list of history', function() {
            return request(server)
                .get('/v1/historic')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(function(res) {
                    expect(res.body.length).to.be.equal(30);
                });
        });   
    });
});