# Product Routes
   - Queries for categories
   - Ability to filter based on requests

# Security
  - Protect for requests not from ajax (curl, browser)
  - Protect admin routes, i.e. posting new projects
  - Protect user information
  * These are finishing details, add ons *

# Cart
  - Save on state? Persist to back end?
  - How does it work with unauthenticated users?
  - Session storage or local storage for unauth users with pending cart
  - Redux middleware? Syncs local storage with redux store for unauthenticated user.
  - Users should persist
  - Get cart working look at integrating Stripe for user payment info
    - They have experience, don't try to worry about this security

  Authenticated Users:
    - Use db to persist cart as pending
    - Not in local storage
    - When they add item to cart, make transaction and transaction-product rows
    - hook for when prices change (nice stretch goal)

  Unauthenticated User:
    - store on state, make order/user when they check out

  _Try to have cart preliminarily done by Friday - start with unauth user_


