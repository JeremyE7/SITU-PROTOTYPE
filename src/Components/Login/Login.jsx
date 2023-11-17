import useUsers from '../../Hooks/useUsers'
import { login } from '../../Utilities/login'
import './Login.css'

const Login = ({ setLoged }) => {
  const { users } = useUsers()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const username = data.get('user')
    const password = data.get('password')

    const userFound = users.find((user) => user.username === username)
    if (!userFound) {
      alert('Usuario no encontrado')
      return
    }
    if (userFound.password !== password && userFound.card.code !== password) {
      alert('Contraseña o codigo de tarjeta incorrecto')
      return
    }

    setLoged(true)
    console.log(userFound)
    login({ account: userFound })
  }

  return (
    <main>
      <section>
        <form action="submit" onSubmit={handleSubmit}>
          <h1>Iniciar sesion</h1>
          <picture>
            <img src="logo.png" alt="Logo del situ" className='login-img'/>
          </picture>
          <label htmlFor="user">Usuario:</label>
          <input type="user" name="user" id="user" placeholder="Jeremy,Andres....." />
          <label htmlFor="password">Codigo de tarjeta o clave:</label>
          <input type="password" name="password" id="password" placeholder="140139239" />
          <button className='btn-login'>Iniciar Sesión</button>
        </form>
      </section>
    </main>
  )
}

export default Login
