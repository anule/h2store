/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db');
const { User, Product, Category } = require('../server/db/models')

const data = {
  category: [
    {
      name: 'Tap Water',
      description: 'Water that comes out of your faucet'
    },
    {
      name: 'Spring Water',
      description: 'Water from Middle Earth'
    },
    {
      name: 'Sparkling Water',
      description: 'Water that wishes it was champagne'
    },
    {
      name: 'Tears',
      description: 'Water that appears when the soul feels sorrow'
    },
    {
      name: 'Animal Water',
      description: 'Leftover bath water from zoo animals'
    },
    {
      name: 'Luxury Water',
      description: 'Water for the rich & famous'
    },
    {
      name: 'Ocean Water',
      description: 'Water from the sea'
    },
    {
      name: 'Economy Water',
      description: 'Water for those on a budget'
    },
    {
      name: 'Religious Water',
      description: 'Water from On High'
    },
    {
      name: 'Distilled Water',
      description: 'Water in its purest form'
    }
  ],
  product: [
    {
      name: 'Unicorn Tears',
      description: 'Water with magical abilities',
      price: '100000.00',
      image: 'https://image.freepik.com/free-vector/happy-unicorn-and-rainbow-with-flat-design_23-2147665194.jpg',
      category: {
        name: 'Tears',
        description: 'Water that appears when the soul feels sorrow'
      }
    },
    {
      name: 'Male Tears',
      description: 'Harvested from the tears of men',
      price: '1.00',
      image: 'http://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s900-c85.jpg',
      category: {
        name: 'Tears',
        description: 'Water that appears when the soul feels sorrow'
      }
    },
    {
      name: 'New York City tap water',
      description: 'Best tap water in the wol\'d',
      price: '5.00',
      image: 'http://media.phillyvoice.com/media/images/09142016_Tap_water_iStock.2e16d0ba.fill-735x490.jpg',
      category: {
        name: 'Tap Water',
        description: 'Water that comes out of your faucet'
      }
    },
    {
      name: 'New Jersey tap water',
      description: 'Tap water from New York\'s neighbor',
      price: '2.50',
      image: 'https://wp-assets.dotproperty-kh.com/wp-content/uploads/sites/14/2014/10/02084308/tap-water-in-a-glass.jpg',
      category: {
        name: 'Tap Water',
        description: 'Water that comes out of your faucet'
      }
    },
    {
      name: 'Well water',
      description: 'Common tap water for people living in rural areas',
      price: '1.35',
      image: 'https://static1.squarespace.com/static/51789286e4b0b5703898c1b2/t/52f9057fe4b03d29195d75fd/1392051584891/Private+Water+Well.jpg?format=1000w',
      category: {
        name: 'Tap Water',
        description: 'Water that comes out of your faucet'
      }
    },
    {
      name: 'LaCroix',
      description: 'Water that no one can pronounce',
      price: '5.99',
      image: 'https://pbs.twimg.com/profile_images/717073053054865409/55C6oypp.jpg',
      category: {
        name: 'Sparkling Water',
        description: 'Water that wishes it was champagne'
      }
    },
    {
      name: 'Canada Dry',
      description: 'Tonic Water',
      price: '3.99',
      image: 'https://www.dpsgproductfacts.com/product_images/CANADA_DRY_TONIC_WATER_8.png',
      category: {
        name: 'Sparkling Water',
        description: 'Water that wishes it was champagne'
      }
    },
    {
      name: 'Bear Water',
      description: 'water that bears shake off',
      price: '50.00',
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/wet-bear-steve-mckinzie.jpg',
      category: {
        name: 'Animal Water',
        description: 'Leftover bath water from zoo animals'
      }
    },
    {
      name: 'Flamingo Water',
      description: 'water that flamingo\'s prance around in',
      price: '50.00',
      image: 'http://www.bhmpics.com/walls/pink_flamingo_birds_in_water-wide.jpg',
      category: {
        name: 'Animal Water',
        description: 'Leftover bath water from zoo animals'
      }
    },
    {
      name: 'Fountain of Youth',
      description: 'Sold by the ounce',
      price: '5000.00',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lucas_Cranach_-_Der_Jungbrunnen_%28Gem%C3%A4ldegalerie_Berlin%29.jpg/407px-Lucas_Cranach_-_Der_Jungbrunnen_%28Gem%C3%A4ldegalerie_Berlin%29.jpg',
      category: {
        name: 'Luxury Water',
        description: 'Water for the rich & famous'
      }
    },
    {
      name: 'Elixir of life',
      description: 'will let you live many moons',
      price: '5000000.00',
      image: 'https://vignette.wikia.nocookie.net/harrypotter/images/8/84/Felix_Felicis_Phial_HBP.png/revision/latest?cb=20161125004911',
      category: {
        name: 'Luxury Water',
        description: 'Water for the rich & famous'
      }
    },
    {
      name: 'Arctic Ice',
      description: 'from the icy glaciers of the North Pole',
      price: '150.00',
      image: 'https://inhabitat.com/wp-content/blogs.dir/1/files/2012/01/Fresh-Water-Arctic-2.jpg',
      category: {
        name: 'Ocean Water',
        description: 'Water from the sea'
      }
    },
    {
      name: 'Pacific Peace',
      description: 'water from the big blue',
      price: '100.00',
      image: 'http://static.panoramio.com/photos/large/30914822.jpg',
      category: {
        name: 'Ocean Water',
        description: 'Water from the sea'
      }
    }
  ]
};

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const categories = await Promise.all(data.category.map(category => {
    return Category.create(category);
  }))
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${categories.length} categories`)
  console.log(`seeded successfully`)


  const products = await Promise.all(data.product.map(product => {
    return Product.create(product);
  }))
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
}




// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
