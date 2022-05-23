import React from 'react';

export interface RepositoryItemProps {
  repository: {
    // id: string;
    name: string;
    full_name: string;
    url: string;
  },
  
}

export default function RepositoryItem(props: RepositoryItemProps) {

  return (
    <li>
        <strong>{props.repository?.name ?? 'Sem nome'}</strong> 
        {
            // estudar melhor sobre esse operador ?? 
        }

        <p>{props.repository?.full_name}</p>

        <a href={props.repository?.url ?? 'http://www.google.com.br'} target="_blank">Acessar repositório</a>
    </li>
  )
}
