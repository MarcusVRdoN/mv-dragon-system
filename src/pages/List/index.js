import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../../components/Page'
import Button from '../../components/Button'
import DragonsList from '../../components/DragonsList'
import routes from '../../routes'

function List() {
  return (
    <Page>
      <div className="u-align-center u-justify-center u-mobile-column">
        <h1 className="title title--large u-mobile-margin-bottom-small">Dragões</h1>
        <Link className="u-margin-top u-mobile-margin-none u-mobile-margin-bottom-big" to={routes.dragons.create}>
          <Button className="primary">Adicionar Dragão</Button>
        </Link>
      </div>
      <DragonsList />
    </Page>
  )
}

export default List
