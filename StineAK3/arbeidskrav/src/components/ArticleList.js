import React from 'react';
import resources from "../resources/ressurser"
import { useParams } from 'react-router-dom';
import Article from "./Article";

export default function ArticleList() {

    // Henter kategori fra URL/kategori spesifisert i router
    let { category } = useParams()

    // Hvis ingen kategori er i urlen/valgt så skal html vises default
    if(category == null) category = "html"

    let categories = resources.filter(res => res.category === category)

      return (
        <main className='main-innhold'>
          <h3>{category}</h3>
          {categories.map((ressurs, index) => {
            return (<Article key={index} data={ressurs}></Article>)
          })}
        </main>
      );
    }

//Kilder:
// LMS
// Forelesninger
// Studentassistenter
// Samboeren til Marianne 