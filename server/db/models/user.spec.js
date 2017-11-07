/* global describe beforeEach it */


const { expect } = require('chai')
const db = require('../index')
const User = db.model('user');

describe('User model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  it('has many transactions and reviews', () => {
    expect(User.associations).to.have.property('transactions')
    expect(User.associations).to.have.property('reviews')
    expect(User.associations.transactions.associationType).to.equal('HasMany')
  })

  describe('attributes', () => {

    let savedUser;

    beforeEach(() => {
      return User.create({
        firstName: 'Hubba',
        lastName: 'Bubba',
        address: '1234 Gum Lane',
        city: 'Candyland',
        state: 'Dreamworld',
        zipcode: 12345,
        email: 'sugar@gmail.com',
        username: 'imbubblegum',
        googleId: 'imagoogleid'
      }).then(user => {
        savedUser = user
      })
    })

    it('has correct attributes', () => {
      expect(savedUser.firstName).to.equal('Hubba');
      expect(savedUser.lastName).to.equal('Bubba');
      expect(savedUser.address).to.equal('1234 Gum Lane');
      expect(savedUser.city).to.equal('Candyland');
      expect(savedUser.state).to.equal('Dreamworld');
      expect(savedUser.zipcode).to.equal(12345);
      expect(savedUser.isAdmin).to.equal(false);
      expect(savedUser.isAuthUser).to.equal(false);
      expect(savedUser.email).to.equal('sugar@gmail.com');
      expect(savedUser.username).to.equal('imbubblegum');
      expect(savedUser.googleId).to.equal('imagoogleid');
    })

    it('has a default value for is admin and is authorized user', () => {
      expect(savedUser.isAdmin).to.equal(false);
      expect(savedUser.isAuthUser).to.equal(false);
    }
    )

    it('has an email', () => {
      savedUser.email = 'imNotAnEmail';
      return savedUser.validate()
        .then(() => {
          throw new Error('validation fails when email is not an email');
        },
        (result) => {
          expect(result).to.be.an.instanceOf(Error);
        })
    })


    it('has a unique email', () => {

      Promise.all([
        User.create({
          firstName: 'Sugar',
          lastName: 'Drops',
          email: 'sugardrops@gmail.com'
        }),
        User.create({
          firstName: 'Chocolate',
          lastName: 'Chips',
          email: 'sugardrops@gmail.com'
        })
      ]).catch((err) => {
        expect(err).to.be.an.instanceOf(Error);
      })

    })

    it('has a unique username', () => {

      Promise.all([
        User.create({
          firstName: 'Sugar',
          lastName: 'Drops',
          username: 'sugardrops'
        }),
        User.create({
          firstName: 'Chocolate',
          lastName: 'Chips',
          username: 'sugardrops'
        })
      ]).catch((err) => {
        expect(err).to.be.an.instanceOf(Error);
      })


    })
  })
})
