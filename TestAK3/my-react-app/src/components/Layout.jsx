import Navbar from './Navbar'
import Resources from './Resources'

export default function Layout() {
    return(
        <>
        <div id="container">
            <Navbar />
            <main>
                <Resources />
            </main>
        </div>
        </>
    )
}