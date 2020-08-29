import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

function Page({ children }) {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default Page
