const { expect } = require('chai')
const db = require('../index')
const Category = db.model('category');

describe('Category model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  it('belongs has many products', () => {
    expect(Category.associations).to.have.property('products')
    expect(Category.associations.products.associationType).to.equal('HasMany')
  })

  describe('attributes', () => {
    describe('', () => {
      let savedCategory;

      beforeEach(() => {
        return Category.create({
          name: 'Celebrity Water',
          description: 'Water sourced the fabulous lives of the hottest celebrities',
        }).then(category => {
          savedCategory = category
        })
      })

      it('has correct attributes', () => {
        expect(savedCategory.name).to.equal('Celebrity Water');
        expect(savedCategory.description).to.equal('Water sourced the fabulous lives of the hottest celebrities');
      })

      it('requires name', () => {
        savedCategory.name = null;
        return savedCategory.validate()
          .then(function () {
            throw new Error('validation fails when name is null');
          },
          function (result) {
            expect(result).to.be.an.instanceOf(Error);
          })
      });

      it('has default value for description', () => {
        let descriptionlessCategory = Category.build({
          name: 'Religious Water'
        })
        return descriptionlessCategory.save()
          .then(function (product) {
            expect(product.description).to.equal('Your Go-To Watering Hole');
          },
        )
      });
    })
  })
});
