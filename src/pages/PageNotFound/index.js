import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../components/Button'
import routes from '../../routes'

function PageNotFound() {
  
  return (
    <section className="page-not-found">
      <img src="https://cdn.astrocentro.com.br/blog/wp-content/uploads/2017/05/30175931/sonhar-com-dragao.jpg" alt=""/>
      <div>
        <h1>404:</h1>
        <h2>Página não encontrada!</h2>
        <Link to={routes.home}>
          <Button className="primary">Me tire daqui!</Button>
        </Link>
      </div>
    </section>
  )
}

export default PageNotFound
