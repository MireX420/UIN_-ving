import resources from "../resources/ressurser"
import React from 'react';
import { NavLink } from "react-router-dom";

// Henter ut alle kategorier fra ressurs listen
let categories = resources.map(ressurs => ressurs.category)
// Fjerner dobble kategorier
let menyItems = categories.filter((item,
    index) => categories.indexOf(item) === index)

export default function Nav() {

   let activeClassName = 'active';

    // Mapper om alle de unike kategoriene til Link componenter med link til de ulike kategoriene som stemmer overens med Router
    return (
        <nav className="faneMeny">
            <ul>
            {menyItems.map((category, index) => {
                return (
                <li key={index}>
                    <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to={category}>{category}</NavLink>
                </li>
                )})
            }
            </ul>
        </nav> 
    )  
}
    console.log('active')


//Kilder:
// https://stackoverflow.com/questions/34418254/how-do-i-add-an-active-class-to-a-link-from-react-router
// LMS
// Forelesninger
// Studentassistenter
// Samboeren til Marianne 

