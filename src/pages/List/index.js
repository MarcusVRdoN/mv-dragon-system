import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../../components/Page'
import Button from '../../components/Button'
import DragonsList from '../../components/DragonsList'
import routes from '../../routes'

function List() {
  return (
    <Page>
      <div className="u-align-center u-justify-center">
        <h1 className="title title--large">Dragões</h1>
        <Link className="u-margin-none" to={routes.dragons.create}>
          <Button className="primary">Adicionar Dragão</Button>
        </Link>
      </div>
      <DragonsList />
    </Page>
  )
}

export default List
