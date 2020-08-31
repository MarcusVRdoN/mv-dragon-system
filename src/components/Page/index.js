import React from 'react'

import { MenuStorage } from '../../context/MenuContext'

import Sidebar from '../Sidebar'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

function Page({ children }) {
  return (
    <>
      <MenuStorage>
        <Sidebar />
        <div className="container">
          <Header />
          <Main>
            {children}
          </Main>
          <Footer />
        </div>
      </MenuStorage>
    </>
  )
}

export default Page
