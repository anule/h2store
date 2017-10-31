/* global describe beforeEach it */

const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Category = db.model('category');

describe('Category routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('/api/categories/', () => {
    const sampleCategory = {
      name: 'celebrity',
      description: 'Hollywood drinking water'
    };

    beforeEach(() => {
      return Category.create(sampleCategory);
    });

    it('GET /api/categories', () => {
      return request(app)
        .get('/api/categories')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].name).to.be.equal(sampleCategory.name);
          expect(res.body[0].description).to.be.equal(sampleCategory.description);
        });
    });
  }); // end describe('/api/categories')

  describe('/api/categories/:id', () => {
    const sampleCategory2 = {
      name: 'holy water',
      description: 'blessed by the Pope at the Vatican',
    };

    const sampleCategory3 = {
      name: 'salt water',
      description: 'water with salt'
    };

    beforeEach(() => {
      return Category.create(sampleCategory2)
        .then(() => {
          return Category.create(sampleCategory3);
        });
    });

    it('GET /api/categories/:id', () => {
      return request(app)
        .get('/api/categories/2')
        .expect(200)
        .then(res => {
          // console.log(res);
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.be.equal(sampleCategory3.name);
          expect(res.body.price).to.be.equal(sampleCategory3.price);
          expect(res.body.description).to.be.equal(sampleCategory3.description);
        });
    });
  }); // end describe('Category routes')
});
