import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineOrderedList, AiOutlineUser } from 'react-icons/ai'

import routes from '../../routes'

import './sidebar.scss'

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>MV Dragon System</h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.home}><AiOutlineHome /> Home</Link>
          </li>
          <li>
            <Link to={routes.dragons.list}><AiOutlineOrderedList /> Lista</Link>
          </li>
          <li>
            <Link to={routes.home}><AiOutlineUser />Sair</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
