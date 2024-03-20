import Nav from "./Nav";
import React from 'react';

export default function Layout({children}) {

    return (
        <>
        <header className="Overskrift">
            <h1>Ressursarkiv</h1>
        </header>

        <Nav></Nav>

        <main className="main-innhold">
            <article className="innhold">
                {children}
            </article>
        </main>
      </>
    )
}

//Kilder:
// LMS
// Forelesninger
// Studentassistenter
// Samboeren til Marianne 