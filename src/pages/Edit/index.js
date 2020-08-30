import React from 'react'
import Page from '../../components/Page'
import DragonsDetail from '../../components/DragonsDetail'

function Edit({ match: { params }}) {
  return (
    <Page>
      <h1 className="title title--large">Editar dragão</h1>
      <DragonsDetail id={params.id} />
    </Page>
  )
}

export default Edit
