import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

import { getDragons, deleteDragons } from '../../services/apiDragons'
import { sortByProp, chunkCount, chunk } from '../../utils'

import Table from '../Table'
import Pagination from '../Pagination'

function DragonsList({ order }) {
  const tableHeaders = [{ label: 'Nome', value: 'name' }, { label: 'Tipo', value: 'type' }, { label: 'Data de criação', value: 'createdAt' }, 'Ação']
  const dateOptions = ['pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }]
  
  const [loading, setLoading] = useState(true)
  const [dragons, setDragons] = useState(null)
  const [propSort, setPropSort] = useState('name')
  const [orderSort, setOrderSort] = useState(order || true)
  const [recordsPerPage, setRecordsPerPage] = useState(5)
  const [numberPages, setNumberPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalItems, setTotalItems] = useState(null)

  const loadData = async () => {
    const data = await getDragons()
    const dataSorted = sortByProp(data, propSort, orderSort)

    setDragons(chunk(dataSorted, recordsPerPage, numberPages, currentPage))
    setNumberPages(chunkCount(dataSorted, recordsPerPage))
    setTotalItems(dataSorted.length)
    setLoading(false)
  }
  const removeData = async (id) => {
    setLoading(true)
    await deleteDragons(id)
    loadData()
  }
  const onSort = (prop) => {
    if (prop) {
      setPropSort(prop)
      setOrderSort(!orderSort)
      const dataSorted = sortByProp(dragons, propSort, !orderSort)
      setDragons([...dataSorted])
    }
  }
  const onChange = ({ target }) => {
    setRecordsPerPage(target.value)
  }
  const onClick = ({ target }) => {
    setCurrentPage(Number(target.innerText))
  }
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }
  const nextPage = () => {
    if (currentPage < numberPages) setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    loadData()
  }, [orderSort, numberPages, recordsPerPage, currentPage])

  return (
    <>
      <Table headers={tableHeaders} sortable={true} onSort={onSort} order={orderSort}>
        {
          dragons && dragons.map(dragon => (
            <tr key={dragon.id}>
              <td>{dragon.name}</td>
              <td>{dragon.type}</td>
              <td>
                {new Intl.DateTimeFormat(...dateOptions).format(new Date(dragon.createdAt))}
              </td>
              <td className={loading ? 'js-disabled' : ''}>
                <Link to={`/dragons/${dragon.id}/edit`}>
                  <AiOutlineEdit className="button-icon" title="Editar" />
                </Link>
                <AiOutlineDelete className="button-icon" title="Excluir" onClick={() => removeData(dragon.id)} />
              </td>
            </tr>
          ))
        }
      </Table>
      <Pagination
        pages={numberPages}
        currentPage={currentPage}
        perPage={recordsPerPage}
        totalItems={totalItems}
        onChange={onChange}
        onClick={onClick}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  )
}

export default DragonsList
