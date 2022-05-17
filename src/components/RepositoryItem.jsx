import React from 'react'

export default function RepositoryItem({ repository}) {

  return (
    <li>
        <strong>{repository?.title ?? 'Default'}</strong> 
        {
            // estudar melhor sobre esse operador ?? 
        }
        <p>{repository?.description}</p>

        <a href={repository?.link ?? 'http://www.google.com.br'}>Acessar repositório</a>
    </li>
  )
}
