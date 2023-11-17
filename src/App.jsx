import { useState } from 'react'
import Login from './Components/Login/Login'
import NavBar from './Components/NavBar/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Inicio from './Inicio'

function App () {
  const [loged, setLoged] = useState(false)

  const Middleware = ({ children }) => {
    if (!loged) {
      return children
    } else {
      return <Navigate to="/inicio"/>
    }
  }

  const MiddleWareInicio = ({ children }) => {
    if (loged) {
      return children
    } else {
      return <Navigate to="/"/>
    }
  }

  return (
    <>
      {loged && <NavBar setLoged={setLoged} />}
      <Routes>
        <Route path="/" element={ <Middleware><Login setLoged={setLoged}/></Middleware> } />
        <Route path="/inicio" element={<MiddleWareInicio><Inicio/></MiddleWareInicio> } />
      </Routes>
    </>
  )
}

export default App
