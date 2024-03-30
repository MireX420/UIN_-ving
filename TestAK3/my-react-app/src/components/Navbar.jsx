import { Link } from "react-router-dom"
import resources from "../resources/resources"

let categories = resources.map(resource => resource.category)

export default function Navbar(){


    return(
        <>
        <nav id="navList">
            <ul>
                {categories.map((category, index) => {
                    return(
                    <li key={index}>
                    <Link to={`/${category}`}>{category}</Link>
                    </li> 
                )})
                }
            </ul>
        </nav>
        </>
    )
}