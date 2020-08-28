import React from 'react'

import './index.scss'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App