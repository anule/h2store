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
const db = require('../db');
const { User, Product, Category } = require('../db/models')

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
      description: 'Water that appears when the human soul feels sorrow'
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

    }
  ]
};

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' })
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
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
