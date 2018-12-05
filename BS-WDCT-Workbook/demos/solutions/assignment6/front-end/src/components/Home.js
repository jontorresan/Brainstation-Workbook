import React from 'react'

const Home = ({ addUser, history }) => (
  <div>
    <h1>Home Page</h1>
    <div>Please Login:</div>
    <form
      onSubmit={e => {
        e.preventDefault()
        addUser(e.target.username.value)
        history.push('/shop')
      }}
    >
      <input type='text' name='username' />
      <button>Login</button>
    </form>
  </div>
)

export default Home