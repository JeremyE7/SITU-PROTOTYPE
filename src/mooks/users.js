export const usersMook = () => {
  return [
    {
      id: 1,
      name: 'Jeremy Encalada',
      username: 'jeremyE',
      password: '123',
      role: 'admin',
      card: {
        code: '123456789',
        balance: 100
      }
    },
    {
      id: 2,
      name: 'Juan Perez',
      username: 'juanP',
      password: '123',
      role: 'user',
      card: {
        code: '987654321',
        balance: 100
      }
    }
  ]
}
