const { expect } = require('chai')
const db = require('../index')
const TransactionsProducts = db.model('transactions-products');
const Product = db.model('product')
const Transaction = db.model('transaction')

describe('TransactionsProducts model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('transactions-products', () => {
    let savedTransaction;

    beforeEach(() => {
      return Promise.all(
        [
          Product.create({
            name: 'Fiji',
            description: 'fresh water'
          }),

          Transaction.create({
            status: 'Pending'
          })
        ])
        .then(values => {
          let valuesProductId = values[0].id;
          let valuesTransactionId = values[1].id;

          return TransactionsProducts.create({
            numOrdered: 20,
            transactionId: valuesProductId,
            productId: valuesTransactionId
          })
        })
        .then(transaction => {
          savedTransaction = transaction
        })

    })


    it('has correct attributes', () => {
      expect(savedTransaction.numOrdered).to.equal(20);
    })

    it('requires number ordered', () => {
      savedTransaction.numOrdered = null;
      return savedTransaction.validate()
        .then(function () {
          throw new Error('validation fails when number ordered is null');
        },
        function (result) {
          expect(result).to.be.an.instanceOf(Error);
        })
    });

    it('does not allow negative number of orders', () => {
      savedTransaction.numOrdered = -4;
      return savedTransaction.validate()
        .then(function () {
          throw new Error('validation fails when number ordered is negative');
        },
        function (result) {
          expect(result).to.be.an.instanceOf(Error);
        })
    });
  })
});
