/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {default as Footer} from './Footer'
export {default as Homepage} from './Homepage'
export {default as AllProducts} from './AllProducts'
export {default as SingleCategory} from './SingleCategory'
export {default as Cart} from './Cart'
export {Login, Signup} from './auth-form'
