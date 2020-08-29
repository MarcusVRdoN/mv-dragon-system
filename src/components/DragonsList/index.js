import React, { useState, useEffect } from 'react'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { getDragons, deleteDragons } from '../../services/apiDragons'
import Table from '../Table'

function DragonsList({ order }) {
  const tableHeaders = ['Nome', 'Tipo', 'Data de criação', 'Ação']
  const dateOptions = ['pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }]
  
  const [dragons, setDragons] = useState(null)
  const [loading, setLoading] = useState(false)

  const loadData = async () => {
    const data = await getDragons()
    setDragons(data)
  }
  const removeData = async (id) => {
    setLoading(true)
    const removed = await deleteDragons(id)
    setLoading(false)
    const data = dragons.filter(item => item.id !== removed?.id)
    setDragons(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <Table headers={tableHeaders}>
      {
        dragons && dragons.map(dragon => (
          <tr key={dragon.id}>
            <td>{dragon.name}</td>
            <td>{dragon.type}</td>
            <td>
              {new Intl.DateTimeFormat(...dateOptions).format(new Date(dragon.createdAt))}
            </td>
            <td>
              <AiOutlineEdit className={`button-icon ${loading ? 'js-disabled' : ''}`} title="Editar" />
              <AiOutlineDelete className={`button-icon ${loading ? 'js-disabled' : ''}`} title="Excluir" onClick={() => removeData(dragon.id)} />
            </td>
          </tr>
        ))
      }
    </Table>
  )
}

export default DragonsList
