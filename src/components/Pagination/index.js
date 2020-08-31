import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Button from '../Button'
import './pagination.scss'

function Pagination({ perPage, pages, currentPage, totalItems, onChange, onClick, prevPage, nextPage }) {
  const numberPages = [...Array(pages).keys()]

  return (
    <div className="pagination">
      <div className="pagination__records-per-page">
        Mostrando:
        <select value={perPage} onChange={onChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div className={`pagination__pages ${numberPages < 2 ? 'u-invisible' : ''}`}>
        <Button className={`button-icon ${currentPage === 1 ? 'js-disabled' : ''}`} onClick={prevPage}><AiOutlineLeft /></Button>
        {
          pages && numberPages.map((page, index) => (
            <Button key={index} className={`button-icon ${currentPage === ++index ? 'is-active' : ''}`} onClick={onClick}>{page + 1}</Button>
          ))
        }
        <Button className={`button-icon ${currentPage === pages ? 'js-disabled' : ''}`} onClick={nextPage}><AiOutlineRight /></Button>
      </div>
      <div className="pagination__total-items">
        Total de itens: <em>{totalItems}</em>
      </div>
    </div>
  )
}

export default Pagination
