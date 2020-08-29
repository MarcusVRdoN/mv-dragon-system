import React, { useState, useEffect } from 'react'
import Page from '../../components/Page'
import DragonsList from '../../components/DragonsList';

function Home() {
  return (
    <Page>
      <h1 className="title title--large">Dragões</h1>
      <DragonsList order="desc" />
    </Page>
  )
}

export default Home
