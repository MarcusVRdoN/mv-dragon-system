import React from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import './table.scss'

function Table({ className, headers, onSort, children }) {
  const extraClasses = className || ''
  
  return (
    <>
      <table className={`box ${extraClasses}`}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                <span className={header.value ? 'u-clickable' : ''} onClick={() => onSort(header.value)}>
                  {header.label || header}
                  {header.value ? <AiOutlineCaretDown /> : false}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </>
  )
}

export default Table
