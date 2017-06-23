const chai = require('chai');
const server = require('../server.js');
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('test', function() {
    it('should test basic server route and return a success code', function(done){
        chai.request(server)
        .get('/')
        .end(function(err, res){
            res.should.have.status(200);
            done();
        });
        

});
})

