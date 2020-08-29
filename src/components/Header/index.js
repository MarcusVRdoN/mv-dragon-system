import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'

function Header() {
  return (
    <header className="header">
      <div className="header__title">Teste</div>
      <div className="header__search">Teste</div>
      <div className="header__account">
        <Link to="/login">Login</Link>
      </div>
    </header>
  )
}

export default Header
