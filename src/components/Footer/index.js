import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

import './footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="u-text-center">© 2020 - MV Dragon System</p>
        <p className="u-text-center">Orgulhosamente <AiFillHeart className="t-primary" /> desenvolvido por MV</p>
      </div>
    </footer>
  )
}

export default Footer
