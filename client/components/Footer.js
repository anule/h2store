import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="container">
      <p>Group Members: Maria, Lina, Blanca, Anule</p>
      <p>Contact information: <a href="mailto:h2store@fakeemail.com">
        h2store@fakeemail.com </a></p>
      <p>© 2017</p>
      <Link to="http://github.com/anule/h2store">GitHub</Link>
    </footer>
  )
}

export default Footer
