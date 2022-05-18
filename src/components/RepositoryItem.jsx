import React from 'react'

export default function RepositoryItem({ repository}) {

  return (
    <li>
        <strong>{repository?.name ?? 'Sem nome'}</strong> 
        {
            // estudar melhor sobre esse operador ?? 
        }
        <p>{repository?.full_name}</p>

        <a href={repository?.url ?? 'http://www.google.com.br'} target="_blank">Acessar repositório</a>
    </li>
  )
}
