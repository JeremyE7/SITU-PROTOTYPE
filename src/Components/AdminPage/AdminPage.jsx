import { useRef, useState } from 'react'
import './AdminPage.css'

const AdminPage = ({ actualUser }) => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')))
  const [buses, setBuses] = useState(JSON.parse(localStorage.getItem('buses')))
  const [userEdit, setUserEdit] = useState()
  const [busEdit, setBusEdit] = useState()
  const dialogEditUserRef = useRef()
  const dialogAddUserRef = useRef()
  const dialogEditBusRef = useRef()
  const dialogAddBusRef = useRef()

  const handleEditUser = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name')
    const username = data.get('username')
    const password = data.get('password')
    const role = data.get('role')
    const card = {
      code: data.get('code'),
      balance: data.get('balance')
    }
    const userIndex = users.findIndex((userMook) => userMook.id === userEdit.id)
    users[userIndex] = { ...userEdit, name, username, password, role, card }
    setUsers(users)
    localStorage.setItem('users', JSON.stringify(users))
    dialogEditUserRef.current.close()
  }

  const handleAddUser = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name')
    const username = data.get('username')
    const password = data.get('password')
    const role = data.get('role')
    const card = {
      code: data.get('code'),
      balance: data.get('balance')
    }
    const newUser = {
      id: users.length + 1,
      name,
      username,
      password,
      role,
      card
    }
    setUsers([...users, newUser])
    localStorage.setItem('users', JSON.stringify([...users, newUser]))
    dialogAddUserRef.current.close()
  }

  const handleEditBus = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const number = data.get('number')
    const ruta = data.get('ruta')
    const busIndex = buses.findIndex((busMook) => busMook.id === busEdit.id)
    buses[busIndex] = { ...busEdit, number, ruta }
    setBuses(buses)
    localStorage.setItem('buses', JSON.stringify(buses))
    dialogEditBusRef.current.close()
  }

  const handleAddBus = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const number = data.get('number')
    const ruta = data.get('ruta')
    const newBus = {
      id: buses.length + 1,
      number,
      ruta
    }
    setBuses([...buses, newBus])
    localStorage.setItem('buses', JSON.stringify([...buses, newBus]))
    dialogAddBusRef.current.close()
  }

  return (
        <>
            <h1 style={{ marginBottom: '10px' }}>Admin {actualUser.name}</h1>
            <section style={{ textAlign: 'center' }}>
                <h2>Usuarios</h2>
                <button className='btn-adduser' onClick={() => { dialogAddUserRef.current.showModal() }}>Añadir</button>
                <ul className='list-info'>
                    {users.map((user) => (
                        <li key={user.id}>
                            <h3>Usuario {user.id}</h3>
                            <div style={{ flexDirection: 'row', flexWrap: 'nowrap', width: '100%' }}>
                                <p><b>{user.name}</b></p>
                                <p>{user.username}</p>
                                <p>{user.card.code}</p>
                                <p>{user.card.balance}</p>
                                <p><b>{user.role}</b></p>
                                <p>
                                    <button className='btn-actions' onClick={() => {
                                      setUserEdit(user)
                                      dialogEditUserRef.current.showModal()
                                    }}>
                                        Editar
                                    </button>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                <h2>Buses</h2>
                <button className='btn-adduser' onClick={() => { dialogAddBusRef.current.showModal() }}>Añadir</button>
                <ul className='list-info'>
                    {buses.map((bus) => (
                        <li key={bus.id}>
                            <h3>Bus {bus.id}</h3>
                            <div style={{ flexDirection: 'row', flexWrap: 'nowrap', width: '100%' }}>
                                <p><b>{bus.number}</b></p>
                                <p>{bus.ruta}</p>
                                <p >
                                    <button className='btn-actions' onClick={() => {
                                      setBusEdit(bus)
                                      dialogEditBusRef.current.showModal()
                                    }}>
                                        Editar
                                    </button>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            {userEdit && <dialog className='dialog-edit-user' ref={dialogEditUserRef}>
                <form action="submit" onSubmit={handleEditUser}>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" id="name" defaultValue={userEdit.name} />
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input type="text" name="username" id="username" defaultValue={userEdit.username} />
                    <label htmlFor="password">Contraseña:</label>
                    <input type="text" name="password" id="password" defaultValue={userEdit.password} />
                    <label htmlFor="role">Rol:</label>
                    <select name="role" id="role" value={userEdit.role}>
                        <option value="user">Usuario</option>
                        <option value="admin">Administrador</option>
                    </select>
                    <label htmlFor="code">Codigo de tarjeta:</label>
                    <input type="text" name="code" id="code" defaultValue={userEdit.card.code} />
                    <label htmlFor="balance">Saldo:</label>
                    <input type="text" name="balance" id="balance" defaultValue={userEdit.card.balance} />
                    <button className='btn-actions' type='button' onClick={() => dialogEditUserRef.current.close()}>Cancelar</button>
                    <button className='btn-actions' type='submit'>Guardar</button>
                </form>
            </dialog>}
            <dialog className='dialog-edit-user' ref={dialogAddUserRef}>
                <form action="submit" onSubmit={handleAddUser}>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input type="text" name="username" id="username" />
                    <label htmlFor="password">Contraseña:</label>
                    <input type="text" name="password" id="password" />
                    <label htmlFor="role">Rol:</label>
                    <select name="role" id="role">
                        <option value="user">Usuario</option>
                        <option value="admin">Administrador</option>
                    </select>
                    <label htmlFor="code">Codigo de tarjeta:</label>
                    <input type="text" name="code" id="code" />
                    <label htmlFor="balance">Saldo:</label>
                    <input type="text" name="balance" id="balance" />
                    <button className='btn-actions' type='button' onClick={() => dialogAddUserRef.current.close()}>Cancelar</button>
                    <button className='btn-actions' type='submit'>Guardar</button>
                </form>
            </dialog>
            {busEdit && <dialog className='dialog-edit-user' ref={dialogEditBusRef} style={{ height: '500px', overflow: 'hidden' }}>
                <form action="submit" onSubmit={handleEditBus}>
                    <label htmlFor="number">Numero:</label>
                    <input type="text" name="number" id="number" defaultValue={busEdit.number} />
                    <label htmlFor="ruta">Ruta:</label>
                    <input type="text" name="ruta" id="ruta" defaultValue={busEdit.ruta} />
                    <button className='btn-actions' type='button' onClick={() => dialogEditBusRef.current.close()}>Cancelar</button>
                    <button className='btn-actions' type='submit'>Guardar</button>
                </form>
            </dialog>
            }
            <dialog className='dialog-edit-user' ref={dialogAddBusRef} style={{ height: '500px', overflow: 'hidden' }}>
                <form action="submit" onSubmit={handleAddBus}>
                    <label htmlFor="number">Numero:</label>
                    <input type="text" name="number" id="number" />
                    <label htmlFor="ruta">Ruta:</label>
                    <input type="text" name="ruta" id="ruta" />
                    <button className='btn-actions' type='button' onClick={() => dialogAddBusRef.current.close()}>Cancelar</button>
                    <button className='btn-actions' type='submit'>Guardar</button>
                </form>
            </dialog>
        </>
  )
}

export default AdminPage
