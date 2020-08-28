import React from 'react'
import { FaHeart } from 'react-icons/fa'

import './footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <p className="u-text-center">© 2020 - MV Dragon System</p>
      <p className="u-text-center">Orgulhosamente <FaHeart className="t-primary" /> desenvolvido por MV</p>
    </footer>
  )
}

export default Footer
