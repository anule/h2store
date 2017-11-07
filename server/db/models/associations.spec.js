// var expect = require('chai').expect;
// const User = require('./user')
// const Product = require('./product');
// const Category = require('./category');
// const Transaction = require('./transaction');
// const TransactionsProducts = require('./transactions-products');
// const Review = require('./review')
// var Promise = require('bluebird');

// describe('associations', function () {
//   describe('product', function () {
//     let categoryA;
//     let productA;
//     let reviewA;
//     let foundProduct;

//     beforeEach(() => {
//       categoryA = Category.create({
//         name: 'Celebrity Water',
//         description: 'Water sourced for the fabulous lives of the hottest celebrities'
//       })
//         .then(() => console.log('CATEGORY-----', categoryA));

//       productA = Product.create({
//         name: 'Refreshing Water',
//         description: 'I\'m refreshing!',
//         price: '3.00',
//         image: 'http://www.uiwater.com/images/default-source/utilities-basic/buisness-units/florida/waterdorp.png?sfvrsn=2',
//         numInStock: 4
//       })

//       reviewA = Review.create({
//         title: 'My Review',
//         date: '2017-10-13',
//         stars: 3,
//         message: 'Great water'
//       })

//       return Promise.all([categoryA, productA, reviewA])
//         .spread(function (category, product, review) {
//           return Promise.all([product.setCategory(category), product.addReview(review)])
//         })
//         .then(function () {
//           return Product.findOne({
//             where: { name: 'Refreshing Water' },
//             include: { model: Category }
//           })
//         })
//         .then(found => {
//           foundProduct = found
//         })
//     })

//     it('belongs to a category', function () {
//       expect(foundProduct.name).to.equal('Refreshing Water');
//       expect(foundProduct).to.exist;
//       expect(foundProduct.categoryId).to.equal(categoryA.id);
//       //eslint-disable-line no-unused-expressions
//     })


//     it('has many reviews', function () {
//       expect(reviewA.productId).to.equal(foundProduct.id)
//     })
//   })

// })
