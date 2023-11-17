export const login = ({ account }) => {
  localStorage.setItem('account', JSON.stringify(account))
}

export const logout = () => {
  localStorage.removeItem('account')
}
