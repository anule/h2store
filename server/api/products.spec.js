/* global describe beforeEach it */

const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Product = db.model('product');

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('/api/products/', () => {
    const sampleProduct = {
      name: 'male tears',
      price: '10.00',
      description: ':( sad boys',
      image: '',
    };

    beforeEach(() => {
      return Product.create(sampleProduct);
    });

    it('GET /api/products', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].name).to.be.equal(sampleProduct.name);
          expect(res.body[0].price).to.be.equal(sampleProduct.price);
          expect(res.body[0].description).to.be.equal(sampleProduct.description);
          expect(res.body[0].image).to.be.equal(sampleProduct.image);
        });
    });
  }); // end describe('/api/products')
}); // end describe( Product routes')
