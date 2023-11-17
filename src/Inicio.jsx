import { useEffect, useState } from 'react'
import UserPage from './Components/UserPage/UserPage'
import { busesMook } from './mooks/buses'
import './App.css'
import AdminPage from './Components/AdminPage/AdminPage'

const Inicio = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('account')))
  console.log(user)
  const [buses, setBuses] = useState([])

  useEffect(() => {
    let getBuses = localStorage.getItem('buses')
    if (!getBuses) {
      localStorage.setItem('buses', JSON.stringify(busesMook()))
      getBuses = localStorage.getItem('buses')
    }
    setBuses(JSON.parse(getBuses))
  }, [])

  useEffect(() => {
    localStorage.setItem('account', JSON.stringify(user))
    const users = localStorage.getItem('users')
    const usersArray = JSON.parse(users)

    const userIndex = usersArray.findIndex((userMook) => userMook.id === user.id)
    usersArray[userIndex] = user
    localStorage.setItem('users', JSON.stringify(usersArray))
  }, [user])
  return (
        <main className='main-page'>
            {user.role === 'admin' ? <AdminPage actualUser={user}/> : <UserPage user={user} buses={buses} setUser={setUser}/>}
        </main>
  )
}

export default Inicio
