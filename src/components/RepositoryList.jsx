import React from 'react'
import RepositoryItem from './RepositoryItem'

const repository = {
    title: "Repositorio Exemplo",
    description: 'Descricao Exemplo',
    link: 'http://www.google.com.br'
}

export default function RepositoryList() {
  return (
    <section className="repository-list">
        <h1>Lista de repositórios</h1>

        <ul>
            
            <RepositoryItem repository={repository} />

            <RepositoryItem />

            <RepositoryItem />

            <RepositoryItem />

        </ul>

    </section>
  )
}
