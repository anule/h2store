/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product');

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('attributes', () => {
    describe('', () => {
      let savedProduct;

      beforeEach(() => {
        return Product.create({
          name: 'Happy Water',
          description: 'Water sourced from tears of joy of long lost lovers',
          price: '4.50',
          image: 'https://maxcdn.icons8.com/Share/icon/p1em/Industry//water1600.png'
        }).then(product => {
            savedProduct = product
        })
      })

      it('has correct attributes', () => {
        expect(savedProduct.name).to.equal('Happy Water');
        expect(savedProduct.description).to.equal('Water sourced from tears of joy of long lost lovers');
        expect(savedProduct.price).to.equal('4.50');
        expect(savedProduct.image).to.equal('https://maxcdn.icons8.com/Share/icon/p1em/Industry//water1600.png');
      })

      it('requires name', () => {
        savedProduct.name = null;
        return savedProduct.validate()
                .then(function(){
                  throw new Error('validation fails when name is null');
                },
              function(result){
                expect(result).to.be.an.instanceOf(Error);
              })
      });
      it('requires description', () => {
        savedProduct.description = null;
        return savedProduct.validate()
                .then(function(){
                  throw new Error('validation fails when description is null');
                },
              function(result){
                expect(result).to.be.an.instanceOf(Error);
              })
      });
      it('has default value for image', () => {
        let imagelessProduct = Product.build({
          name: 'Sad Water',
          description: 'Water sourced from bitter tears of spurned lovers',
          price: '44.50'})
        return imagelessProduct.save()
                .then(function(product){
                  expect(product.image).to.equal('https://maxcdn.icons8.com/Share/icon/p1em/Industry//water1600.png');
                },
              )
      });
    })
  })
});
