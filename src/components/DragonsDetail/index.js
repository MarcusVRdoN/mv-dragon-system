import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getDragon, updateDragon } from '../../services/apiDragons'
import Table from '../Table'
import Button from '../Button'
import routes from '../../routes'

function DragonsDetail({ id }) {
  const tableHeaders = ['Nome', 'Tipo', 'Data de criação']
  const dateOptions = ['pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }]
  
  const [dragon, setDragon] = useState(null)

  const loadData = async () => {
    const data = await getDragon(id)
    setDragon(data)
  }
  const handle = ({ target }) => {
    const { name, value } = target
    setDragon({ ...dragon, [name]: value })
  }
  const updateData = async () => {
    await updateDragon(id, dragon)
    window.history.back()
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Table className="vertical" headers={tableHeaders}>
        {
          dragon && (
            <tr>
              <td>
                <input type="text" name="name" value={dragon.name} onChange={handle} />
              </td>
              <td>
                <input type="text" name="type" value={dragon.type} onChange={handle} />
              </td>
              <td>
                <input type="text" name="createdAt" value={new Intl.DateTimeFormat(...dateOptions).format(new Date(dragon.createdAt || new Date()))} disabled />
              </td>
            </tr>
          )
        }
      </Table>
      <div className="u-text-right">
        <Link to={routes.dragons.list}>
          <Button className="secundary">Cancelar</Button>
        </Link>
        <Button className="primary" onClick={updateData}>Salvar</Button>
      </div>
    </>
  )
}

export default DragonsDetail
