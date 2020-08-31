import React from 'react'
import { useParams } from 'react-router-dom'

import Page from '../../components/Page'
import DragonsDetail from '../../components/DragonsDetail'

function Read() {
  const { id } = useParams()

  return (
    <Page>
      <h1 className="title title--large">Informações do dragão</h1>
      <DragonsDetail id={id} readOnly />
    </Page>
  )
}

export default Read
