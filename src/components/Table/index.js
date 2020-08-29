import React from 'react'
import './table.scss'

function Table({ headers, children }) {
  return (
    <table className="box">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

export default Table
