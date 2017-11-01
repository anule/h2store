/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('User model attributes', () => {
    let savedUser

    beforeEach(() => {
      return User.create({
        firstName: 'David',
        lastName: 'Bowie',
        email: 'starman@gmail.com',
        username: 'ZiggyStardust'
      }).then(user => {
        savedUser = user
      })
    })

    it('has default value for isAdmin and isAuthUser', () => {
      let mostlyNullUser = User.build({
        firstName: 'Nullo'})
      return mostlyNullUser.save()
              .then(function(user) {
                expect(user.isAuthUser).to.equal(false);
                expect(user.isAdmin).to.equal(false);
              })

    })

    it('must have unique email address', () => {
      let nonUniqueUser = User.build({
        firstName: 'Zavid',
        lastName: 'Zowie',
        email: 'starman@gmail.com',
        username: 'ZiggyZtardust'})

      return nonUniqueUser.save()
              .then(function(){
                throw new Error('validation fails when email is not unique');
              },
              function(result){
                expect(result).to.be.an.instanceOf(Error);
              })
      });

    it('must have unique username', () => {
      let nonUniqueUser = User.build({
        firstName: 'Zavid',
        lastName: 'Zowie',
        email: 'ztarman@gmail.com',
        username: 'ZiggyStardust'})

      return nonUniqueUser.save()
              .then(function(){
                throw new Error('validation fails when username is not unique');
              },
              function(result){
                expect(result).to.be.an.instanceOf(Error);
              })
      });
    })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(() => {
        return User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
          .then(user => {
            cody = user
          })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
