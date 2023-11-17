import { useEffect, useState } from 'react'
import { getUsersStorage, setUsersStorage } from '../Utilities/users'
import { usersMook } from '../mooks/users'

const useUsers = () => {
  const [users, setUsers] = useState([])

  const addUser = (user) => {
    setUsers([...users, user])
  }

  useEffect(() => {
    const allUsers = getUsersStorage()
    console.log(allUsers)
    if (allUsers.length > 0) {
      setUsers(allUsers)
    } else {
      console.log(usersMook())
      setUsers(usersMook())
    }
  }, [])

  useEffect(() => {
    if (users.length > 0) {
      console.log(users)
      setUsersStorage({ users })
    }
  }, [users])

  return { users, addUser }
}

export default useUsers
