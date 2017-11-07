/* global describe beforeEach it */

const { expect } = require('chai')
const db = require('../index')
const Transaction = db.model('transaction');

describe('Transaction model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  it('belongs to a user and to many products', () => {
    expect(Transaction.associations).to.have.property('user')
    expect(Transaction.associations).to.have.property('products')
    expect(Transaction.associations.user.associationType).to.equal('BelongsTo')
    expect(Transaction.associations.products.associationType).to.equal('BelongsToMany')
  })


  describe('Transaction model attributes', () => {

    it('has default value for status', () => {
      let mostlyNullTransaction = Transaction.build({})
      return mostlyNullTransaction.save()
        .then(function (transaction) {
          expect(transaction.status).to.equal('Pending');
        })
    })

    it('throw an error if status is not set to a valid field', () => {
      let invalidTransaction = Transaction.build({
        status: 'Wack status'
      })

      return invalidTransaction.save()
        .then(function () {
          throw new Error('validation fails when status is set to a non-valid state');
        },
        function (result) {
          expect(result).to.be.an.instanceOf(Error);
        })
    });
  });
});
