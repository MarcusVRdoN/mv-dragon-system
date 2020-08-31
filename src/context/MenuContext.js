import React, { createContext, useState } from 'react'

const MenuContext = createContext()

function MenuStorage({ children }) {
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(!active)
  }

  return (
    <MenuContext.Provider value={{ active, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuContext, MenuStorage }
