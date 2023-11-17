export const setUsersStorage = ({ users }) => {
  console.log('añadiendo usuarios')
  localStorage.setItem('users', JSON.stringify(users))
}

export const getUsersStorage = () => {
  const users = localStorage.getItem('users')
  return users ? JSON.parse(users) : []
}
