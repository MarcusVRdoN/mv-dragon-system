import React from 'react'
import './main.scss'

function Main({ children }) {
  return (
    <main className="main">
      <div className="container">
        {children}
      </div>
    </main>
  )
}

export default Main
