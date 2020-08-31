import React from 'react'

import './button.scss'

function Button({ className, type = 'button', onClick, children }) {
  const extraClasses = className || ''

  return (
    <button className={`button ${extraClasses}`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
