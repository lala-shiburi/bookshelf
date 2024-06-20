import React, {useState} from 'react'

function LoginForm({onSubmit, buttonText}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleInput = e => {
    const {name, value} = e.target

    if (name === 'username') {
      setUsername(value)
    } else {
      setPassword(value)
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({username, password})
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input name="username" value={username} onChange={handleInput}></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" value={password} onChange={handleInput}></input>
      </div>
      <button onClick={handleSubmit}>{buttonText}</button>
    </form>
  )
}
export {LoginForm}
