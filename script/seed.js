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
const { Product, Category, Review } = require('../server/db/models')

const data = {
  category: [
    {
      name: 'Tap Water',
      description: 'Water that comes out of your faucet',
      products: [
        {
          name: 'New York City tap water',
          description: 'Best tap water in the wol\'d',
          price: '5.00',
          numInStock: 100,
          image: 'http://media.phillyvoice.com/media/images/09142016_Tap_water_iStock.2e16d0ba.fill-735x490.jpg',
          reviews: [
            {
              title: 'Too warm!',
              date: '2017-10-13',
              stars: 2,
              message: 'this water was tasteless! Did NOT enjoy!'
            },
            {
              title: 'Great Water!',
              date: '2017-09-13',
              stars: 4,
              message: 'So refreshed!! I love tap water!'
            },
            {
              title: 'This water was ok',
              date: '2017-09-15',
              stars: 3,
              message: 'Water was aight!'
            }
          ]
        },
        {
          name: 'New Jersey tap water',
          description: 'Tap water from New York\'s neighbor',
          price: '2.50',
          numInStock: 100,
          image: 'https://wp-assets.dotproperty-kh.com/wp-content/uploads/sites/14/2014/10/02084308/tap-water-in-a-glass.jpg',
          reviews: [
            {
              title: 'Good for late night hydration',
              date: '2017-10-13',
              stars: 3.2,
              message: 'My go to for when I wake up in the middle of the night and I\'m super thirsty.'
            }
          ]
        },
        {
          name: 'Well water',
          description: 'Common tap water for people living in rural areas',
          price: '1.35',
          numInStock: 100,
          image: 'https://static1.squarespace.com/static/51789286e4b0b5703898c1b2/t/52f9057fe4b03d29195d75fd/1392051584891/Private+Water+Well.jpg?format=1000w',
          reviews: [
            {
              title: 'Meh',
              date: '2016-02-13',
              stars: 2,
              message: 'It was ok, but I prefer New York city tap water.'
            }
          ]
        }
      ]
    },
    {
      name: 'Sparkling Water',
      description: 'Water that wishes it was champagne',
      products: [
        {
          name: 'LaCroix',
          description: 'Water that no one can pronounce',
          price: '5.99',
          numInStock: 100,
          image: 'https://pbs.twimg.com/profile_images/717073053054865409/55C6oypp.jpg',
          reviews: [
            {
              title: 'Too much CO2!!!!!',
              date: '2016-10-13',
              stars: 1,
              message: 'I couldn\'t stop burping all night! So embarassing on my date!'
            },
            {
              title: 'Tickles my throat',
              date: '2017-09-18',
              stars: 3,
              message: 'This water was great but tickles my throat!'
            },
            {
              title: 'Tasty water!',
              date: '2017-08-18',
              stars: 5,
              message: 'This water makes me feel fancy!'
            }
          ]
        },
        {
          name: 'Canada Dry',
          description: 'Tonic Water',
          price: '3.99',
          numInStock: 100,
          image: 'https://www.dpsgproductfacts.com/product_images/CANADA_DRY_TONIC_WATER_8.png',
          reviews: [
            {
              title: 'Incredible for burping contests!!!',
              date: '2017-05-13',
              stars: 5,
              message: 'I was able to burp the full alphabet with this water! My brother owed me $5 because he said I couldn\'t!'
            }
          ]
        }
      ]
    },
    {
      name: 'Tears',
      description: 'Water that appears when the soul feels sorrow',
      products: [
        {
          name: 'Unicorn Tears',
          description: 'Water with magical abilities',
          price: '100000.00',
          numInStock: 100,
          image: 'https://image.freepik.com/free-vector/happy-unicorn-and-rainbow-with-flat-design_23-2147665194.jpg',
          reviews: [
            {
              title: 'These tears were MAGIC!!',
              date: '2017-10-13',
              stars: 3.2,
              message: 'These tears made my 12 year scar fade away! WOW!'
            }
          ]
        },
        {
          name: 'Male Tears',
          description: 'Harvested from the tears of men',
          price: '1.00',
          numInStock: 100,
          image: 'http://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s900-c85.jpg',
          reviews: [
            {
              title: 'Salty!',
              date: '2015-10-13',
              stars: 1,
              message: 'These tears made my stomach hurt!'
            },
            {
              title: 'I had visions!',
              date: '2017-06-18',
              stars: 3,
              message: 'After drinking these tears I think I had visions from the eyes of which they came from! SO WEIRD!'
            },
            {
              title: 'I prefer the Unicorn Tears',
              date: '2017-08-19',
              stars: 5,
              message: 'I tried your other product, which were the Unicorn Tears and I have to say, those were tastier!'
            }
          ]
        }
      ]
    },
    {
      name: 'Animal Water',
      description: 'Leftover bath water from zoo animals',
      products: [
        {
          name: 'Bear Water',
          description: 'water that bears shake off',
          price: '50.00',
          numInStock: 100,
          image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/wet-bear-steve-mckinzie.jpg',
          reviews: [
            {
              title: 'Smelled So Bad!',
              date: '2015-10-13',
              stars: 1,
              message: 'This water smelled awful! ALSO, I found a hair in it!'
            }
          ]
        },
        {
          name: 'Flamingo Water',
          description: 'water that flamingo\'s prance around in',
          price: '50.00',
          numInStock: 100,
          image: 'http://www.bhmpics.com/walls/pink_flamingo_birds_in_water-wide.jpg',
          reviews: [
            {
              title: 'My water is pink!',
              date: '2017-01-01',
              stars: 4,
              message: 'My pet flamingo loves this water.'
            }
          ]
        }
      ]
    },
    {
      name: 'Luxury Water',
      description: 'Water for the rich & famous',
      products: [
        {
          name: 'Fountain of Youth',
          description: 'Sold by the ounce',
          price: '5000.00',
          numInStock: 100,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lucas_Cranach_-_Der_Jungbrunnen_%28Gem%C3%A4ldegalerie_Berlin%29.jpg/407px-Lucas_Cranach_-_Der_Jungbrunnen_%28Gem%C3%A4ldegalerie_Berlin%29.jpg',
          reviews: [
            {
              title: 'AMAZING I think I even aged backwards!',
              date: '2015-07-13',
              stars: 5,
              message: 'Wow, I can feel the energy coming back to me! I will live forever!'
            },
            {
              title: 'Will continue buying this product for sure!',
              date: '2016-06-18',
              stars: 5,
              message: 'I love this water, it is going to be a MUST for the rest of my life'
            }
          ]
        },
        {
          name: 'Elixir of life',
          description: 'will let you live many moons',
          price: '5000000.00',
          numInStock: 100,
          image: 'https://vignette.wikia.nocookie.net/harrypotter/images/8/84/Felix_Felicis_Phial_HBP.png/revision/latest?cb=20161125004911',
          reviews: [
            {
              title: 'This brought my pet hamster back to life!!!!',
              date: '2017-02-10',
              stars: 5,
              message: 'My hamster Chibi started running on her wheel again after a few drops of this water.'
            }
          ]
        }
      ]
    },
    {
      name: 'Ocean Water',
      description: 'Water from the sea',
      products: [
        {
          name: 'Arctic Ice',
          description: 'from the icy glaciers of the North Pole',
          price: '150.00',
          numInStock: 100,
          image: 'https://inhabitat.com/wp-content/blogs.dir/1/files/2012/01/Fresh-Water-Arctic-2.jpg',
          reviews: [
            {
              title: 'Quality H20',
              date: '2017-03-17',
              stars: 5,
              message: 'I was playing football and got knocked out and this water refuled me!'
            }
          ]
        },
        {
          name: 'Pacific Peace',
          description: 'water from the big blue',
          price: '100.00',
          numInStock: 100,
          image: 'http://static.panoramio.com/photos/large/30914822.jpg',
          reviews: [
            {
              title: 'The most refreshing water ever!',
              date: '2016-10-13',
              stars: 5,
              message: 'Extremely hydrated after drinking this water'
            }
          ]
        }
      ]
    },
    {
      name: 'Economy Water',
      description: 'Water for those on a budget',
      products: [
        {
          name: 'Rain Water',
          description: 'Recycled nature water',
          price: '.50',
          numInStock: 100,
          image: 'http://pagdand.org/wp-content/uploads/2017/05/rain-water-harvesting-2.jpg',
          reviews: [
            {
              title: 'Refreshing',
              date: '2017-10-13',
              stars: 4.5,
              message: 'Loved this water, it was so fresh!'
            },
            {
              title: 'Used this water for my plants!',
              date: '2017-06-18',
              stars: 5,
              message: 'My plants have grown so much with this rain water!'
            }
          ]
        },
        {
          name: 'Fountain water',
          description: 'water usually found next to bathrooms or in hot spots in the park',
          price: '0.03',
          numInStock: 100,
          image: 'https://media.angieslist.com/s3fs-public/water-fountain.jpg',
          reviews: [
            {
              title: 'I love this water',
              date: '2017-10-13',
              stars: 3.2,
              message: 'This water reminds me of the sips I\'d take in school in between classes!'
            }
          ]
        }
      ]
    },
    {
      name: 'Religious Water',
      description: 'Water from On High',
      products: [
        {
          name: 'Holy Water',
          description: 'water blessed by the Pope himself',
          price: '600.00',
          numInStock: 100,
          image: 'http://3.bp.blogspot.com/-mK9-UzTvKxk/VhrWSbL0IQI/AAAAAAAAOjc/uDe6763G_J4/s1600/Pope-Francis-sprinkles-Holy-Water.jpg',
          reviews: [
            {
              title: '#BLESSED',
              date: '2015-10-16',
              stars: 5,
              message: 'I feel so purified OMAGAH!'
            },
            {
              title: 'Great for Exorcisms',
              date: '2017-08-18',
              stars: 5,
              message: 'Used this for a difficult case and the demons were out in less than an hour!'
            },
            {
              title: 'Thank you for having this online!',
              date: '2017-08-19',
              stars: 5,
              message: 'This is great! I didn\'t have to travel to the Vatican for this! Used it at my nieces baptism!'
            }
          ]
        },
        {
          name: 'Ganges river water',
          description: 'water from the holiest river',
          price: '200.00',
          numInStock: 100,
          image: 'https://www.fairobserver.com/wp-content/uploads/2016/09/The-Ganges-2-938x450.jpg',
          reviews: [
            {
              title: 'So cool',
              date: '2017-10-13',
              stars: 3.2,
              message: 'I can\'t believe I have Ganges river water! Thanks!'
            }
          ]
        }
      ]
    },
    {
      name: 'Distilled Water',
      description: 'Water in its purest form',
      products: [
        {
          name: 'Fiji',
          description: 'the most refreshing distilled water',
          price: '2.00',
          numInStock: 100,
          image: 'https://d1ztbbrs4iu37k.cloudfront.net/photos/2017/02/10/92423-kylie_contest_fijiwater_new_hero_fijiwater.jpg',
          reviews: [
            {
              title: 'THE BEST',
              date: '2017-10-18',
              stars: 5,
              message: 'My favorite bottled water!'
            }
          ]
        },
        {
          name: 'Dasani',
          description: 'Coca-Cola\'s bottled water',
          price: '1.50',
          numInStock: 100,
          image: 'http://www.dasani.com/img/dasani-products/dasani-hover.jpg',
          reviews: [
            {
              title: 'Great bottled water!',
              date: '2016-10-13',
              stars: 3.5,
              message: 'This water was hydrating!'
            }
          ]
        }
      ]
    }
  ]
};

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const categories = await Promise.all(data.category.map(category => {
    return Category.create(category, { include: [{ model: Product, include: [Review] }] });
  }))
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${categories.length} categories`)
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
