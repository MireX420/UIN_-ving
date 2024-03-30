import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Resources from './components/Resources'
import resources from './resources/resources'

function App() {

  console.log(resources)

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/HTML" element={<Resources category="html"/>}  />
          <Route path="/CSS" element={<Resources category="css"/>}  />
          <Route path="/Javascript" element={<Resources category="javascript"/>}  />
          <Route path="/React" element={<Resources category="react"/>}  />
          <Route path="/Sanity%20and%20headless%20CMS" element={<Resources category="sanity"/>} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
