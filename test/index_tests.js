const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')
const assert = require('assert')

describe('GET static pages', function () {
  describe('/', function () {
    it('should response 200', function (done) {
      request(app)
      .get('/')
      .expect(200, done)
    })
  })

  describe('/about', function () {
    it('should response 404', function (done) {
      request(app)
      .get('/about')
      .expect(404, done)
    })
  })
})

describe('CRUD taco test', function () {
  describe('GET /tacos', function () {
    it('should response 200', function (done) {
      request(app)
      .get('/tacos')
      .end(function (err, res) {
        expect(res.status).to.equal(200)
        assert.strictEqual(200, res.status) // same as above
        expect(res.body).to.be.an('array')

        if (res.body.length) {
          expect(res.body[0]).to.have.property('calorie')
        }
        done()
      })
    })
  })

  describe('POST /tacos', function () {
    it('should create new taco', function (done) {
      request(app)
      .post('/tacos')
      .send({
        name: 'Parmesan Fiesta',
        amount: 1000,
        calorie: 500
      })
      .end(function (err, res) {
        done()
      })
    })
  })
})
