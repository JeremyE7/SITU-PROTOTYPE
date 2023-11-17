const UserPage = ({ user, buses, setUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ ...user, card: { ...user.card, balance: (user.card.balance - 0.30).toFixed(2) } })
  }

  return (
    <>
      <h1 style={{ marginBottom: '10px' }}>Bienvenido {user.name}</h1>
      <section>
        <h2>Su saldo actual es de: $ {user.card.balance} </h2>
        <form action="submit" onSubmit={handleSubmit} style={{ height: '400px' }}>
          <label htmlFor="user">Escoga el bus que desea tomar:</label>
          <input type="text" list="buses" name="bus"/>
          <datalist id="buses">
            {buses.map((bus) => (
              <option value={bus.number} key={bus.id}/>
            ))}
          </datalist>

          <button className='btn-login'>Tomar bus</button>
        </form>
      </section>
    </>
  )
}

export default UserPage
