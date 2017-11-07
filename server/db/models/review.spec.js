const { expect } = require('chai')
const db = require('../index')
const Review = db.model('review');
// const User = db.model('user');


describe('Review model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  it('belongs to a user and a product', () => {
    expect(Review.associations).to.have.property('user')
    expect(Review.associations).to.have.property('product')
    expect(Review.associations.user.associationType).to.equal('BelongsTo')
    expect(Review.associations.product.associationType).to.equal('BelongsTo')
  })

  describe('attributes', () => {
    let savedReview;

    beforeEach(() => {
      return Review.create({
        title: 'So Hydrated!',
        date: '2017-10-13',
        stars: '4.5',
        message: 'I needed water for my trip to the Amazon and this water was just the BEST!'
      }).then(review => {
        savedReview = review
      })
    })

    it('has correct attributes', () => {
      expect(savedReview.title).to.equal('So Hydrated!');
      expect(savedReview.date).to.equal('2017-10-13')
      expect(savedReview.stars).to.equal('4.5');
      expect(savedReview.message).to.equal('I needed water for my trip to the Amazon and this water was just the BEST!');
    })

    it('requires stars', () => {
      savedReview.stars = null;
      return savedReview.validate()
        .then(function () {
          throw new Error('validation fails when stars is null');
        },
        function (result) {
          expect(result).to.be.an.instanceOf(Error);
        })
    });

    it('has default value for title', () => {
      let newReview = Review.build({
        date: '2017-09-13',
        stars: '3',
        message: 'This water tasted like I was drinking from a waterfall in Fiji'
      })
      return newReview.save()
        .then(function (review) {
          expect(review.title).to.equal('My Review');
        },
      )
    });

    it('has default value for date', () => {
      let anotherReview = Review.build({
        title: 'Quenched my thirst!',
        stars: '3',
        message: 'This water quenched my thirst!'
      })

      return anotherReview.save()
        .then(function (review) {
          expect(review.date).to.not.be.null;

        },
      )
    });

    it('shouldn\'t allow a star value over 5', () => {
      let yetAnotherReview = Review.build({
        title: 'Great Water!',
        stars: '12',
        message: 'This water was sooo great!'
      })
      return yetAnotherReview.save()
        .then(function () {
          throw new Error('validation fails when stars value is over 5');
        },
        function (result) {
          expect(result).to.be.an.instanceOf(Error);
        })
    });
  })
});
