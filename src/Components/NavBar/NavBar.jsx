import { Navigate } from 'react-router-dom'
import { logout } from '../../Utilities/login'
import './NavBar.css'

const NavBar = ({ setLoged }) => {
  const handleCloseSession = () => {
    logout()
    setLoged(false)
    console.log('Cerrando sesion')
    return <Navigate to="/"/>
  }

  return (
        <header>
            <picture>
                <img src="logo.png" alt="Logo del sistema SITU" />
            </picture>
            <nav>
              <ul>
                <li>
                  <button className='btn-logout' onClick={handleCloseSession}>Cerrar Sesion</button>
                </li>
              </ul>
            </nav>
        </header>
  )
}

export default NavBar
