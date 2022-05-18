import React, { useState, useEffect }from 'react'
import RepositoryItem from './RepositoryItem'

import '../styles/repositories.scss';

export default function RepositoryList() {

    const repositoriesMock = [
        {
            title: "Repositorio 1",
            description: 'Descricao 1',
            link: 'http://www.google.com.br'
        },
        {
            title: "Repositorio 2",
            description: 'Descricao 2',
            link: 'http://www.google.com.br'
        },
        {
            title: "Repositorio 3",
            description: 'Descricao 3',
            link: 'http://www.google.com.br'
        }
    ]

    const [repositories, setRepositories] = useState([]);

    console.log('repositories xxx', repositories)

    useEffect(() => {
        fetch('https://api.github.com/users/rafaelpalma88/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>

                {repositories.map(repository => (
                    <RepositoryItem repository={repository} key={repository.id} />
                ))}
            
            </ul>

        </section>
    )
}
