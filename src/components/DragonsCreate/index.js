import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createDragon } from '../../services/apiDragons'
import Table from '../Table'
import Button from '../Button'
import routes from '../../routes'

function DragonsCreate() {
  const tableHeaders = ['Nome', 'Tipo']
  
  const [dragon, setDragon] = useState({ name: '', type: '', createdAt: new Date() })

  const handle = ({ target }) => {
    const { name, value } = target
    setDragon({ ...dragon, [name]: value })
  }
  const createData = async () => {
    await createDragon(dragon)
    window.history.back()
  }

  return (
    <>
      <Table className="vertical" headers={tableHeaders}>
        {
          dragon && (
            <tr>
              <td>
                <input type="text" name="name" value={dragon.name} placeholder="Digite o nome do seu dragão" onChange={handle} />
              </td>
              <td>
                <input type="text" name="type" value={dragon.type} placeholder="Digite o tipo do seu dragão" onChange={handle} />
              </td>
            </tr>
          )
        }
      </Table>
      <div className="u-text-right">
        <Link to={routes.dragons.list}>
          <Button className="secundary">Cancelar</Button>
        </Link>
        <Button className="primary" onClick={createData}>Salvar</Button>
      </div>
    </>
  )
}

export default DragonsCreate
