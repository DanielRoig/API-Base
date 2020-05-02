const chai = require('chai');
const chaiHttp = require('chai-http');
const helper = require('./testUtil')
const FakeUser = require('../utils/factories/user')
const User = require('../models/user')
const server = require('../index')
const should = chai.should();

chai.use(chaiHttp);

describe('User SignUp/Login process', () => {
  // beforeEach((done) => { //Before each test we empty the database
  //   User.deleteMany({}, (err) => {
  //     done();
  //   });
  // });

  //Esto nos enciende el servidor en ejecucion de tests
  let server;
  before((done) => {
    helper().then((app) => {
      server = app
      done();
    });
  });

  let user = FakeUser.build()

  describe('/POST signup', () => {
    it('it should register an user', (done) => {
      chai.request(server)
        .post('/api/v1/user/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.eql("Registered user")
          done();
        });
    });
  });

  describe('/POST login', () => {
    it('it should login an user', (done) => {
      chai.request(server)
        .get('/api/v1/user/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});