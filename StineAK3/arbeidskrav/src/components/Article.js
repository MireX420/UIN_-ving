import React from 'react';

export default function Article(data) {
  return ( 
    <article className='innhold'>
      <ul>
        <li>
          <a href={data?.data?.url}>
            {data?.data?.title}
          </a>
        </li>
      </ul>
    </article> 
    )
  }

//Kilder:
// LMS
// Forelesninger
// Studentassistenter
// Samboeren til Marianne      
      
