import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineOrderedList, AiOutlineUser } from 'react-icons/ai'

import routes from '../../routes'

import { MenuContext } from '../../context/MenuContext'

import './sidebar.scss'

function Sidebar() {
  const { active } = useContext(MenuContext)
  
  return (
    <aside className={`sidebar ${active ? 'is-active' : ''}`}>
      <img className="sidebar__logo" src="https://fontmeme.com/permalink/200831/4a93031045b98392a1ae4f9bf60a1cd1.png" alt="Logo do App"/>
      <nav>
        <ul>
          <li>
            <NavLink to={routes.home} exact><AiOutlineHome /> Home</NavLink>
          </li>
          <li>
            <NavLink to={routes.dragons.list} exact><AiOutlineOrderedList /> Lista</NavLink>
          </li>
          <li>
            <NavLink to={routes.logout} exact><AiOutlineUser />Sair</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
