import React from 'react'
import Page from '../../components/Page'

function Home() {
  return (
    <Page>
      <h1 className="title title--large">Seja bem-vindo</h1>
      <article>
        <p>Olá, este é o MV Dragon System e você é muito bem-vindo!</p>
        <p>
          Esta aplicação foi desenvolvida para que você possa <strong>criar e gerenciar os seus próprios dragões</strong>.<br />
          A ideia desta aplicação é demonstrar os conhecimentos do desenvolvedor com as principais <em>stacks</em> do <em>front-end</em>, utilizando o framework reativo <strong><em>React</em></strong>.
        </p>
        <p>Aqui você poderá:</p>
        <ul>
          <li>Listar todos os dragões cadastrados;</li>
          <li>Alterar as informações de algum dragão;</li>
          <li>Remover permanentemente dragões da lista;</li>
          <li>Ver detalhes de algum dragão específico;</li>
          <li>Criar e adicionar um novo dragão à lista do App.</li>
        </ul>
        <br/>
        <br/>
        <blockquote>Obs.: isso tudo só é possível por meio de login com usuário e senha</blockquote>
      </article>
    </Page>
  )
}

export default Home
