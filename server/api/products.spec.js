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

  describe('/api/products/:id', () => {
    const sampleProduct2 = {
      name: 'holy water',
      price: '2000.00',
      description: 'blessed by the Pope at the Vatican',
    };

    const sampleProduct3 = {
      name: 'salt water',
      price: '0.00',
      description: 'water with salt'
    };

    beforeEach(() => {
      return Product.create(sampleProduct2)
        .then(() => {
          return Product.create(sampleProduct3);
        });
    });

    it('GET /api/products/:id', () => {
      return request(app)
        .get('/api/products/2')
        .expect(200)
        .then(res => {
          // console.log(res);
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.be.equal(sampleProduct3.name);
          expect(res.body.price).to.be.equal(sampleProduct3.price);
          expect(res.body.description).to.be.equal(sampleProduct3.description);
        });
    });
  });
}); // end describe( Product routes')
