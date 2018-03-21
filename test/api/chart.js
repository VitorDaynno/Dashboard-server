var request  = require('supertest');

describe('chart', function(){
    var server;

    before(function() {
        server = require('../../server');
    });
    after(function() {
        server.close();
    });

    describe('/v1/formPayments', function() {
        it('should return a list of charts', function() {
            return request(server)
                .get('/v1/formPayments')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    });

    describe('/v1/monthlyExpenses/form', function() {
        it('should return a list of charts', function() {
            return request(server)
                .get('/v1/monthlyExpenses/Dinheiro')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    });
});
