import React from 'react'

import './button.scss'

function Button({ className, icon, onClick, children }) {
  const extraClasses = className || ''

  return (
    <button className={`button ${extraClasses}`} type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
