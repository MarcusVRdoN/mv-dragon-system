import React, { useContext } from 'react'

import Button from '../Button'
import { UserContext } from '../../context/UserContext'
import { MenuContext } from '../../context/MenuContext'

import './header.scss'

function Header() {
  const context = useContext(UserContext)
  const { active, toggleMenu } = useContext(MenuContext)

  return (
    <header className="header">
      <Button className={`hamburger hamburger--spin t-primary u-only-mobile ${active ? 'is-active' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </Button>
      <div className="header__column header__account">
        <span>Olá, {context.user.name}</span>
        <img src={context.user.avatar} alt={`Avatar de ${context.user.name}`}/>
      </div>
    </header>
  )
}

export default Header
