import {createRoot} from 'react-dom/client'
import React, {useState} from 'react'
import '@reach/dialog/styles.css'
import {Dialog} from '@reach/dialog'
import {Logo} from './components/logo'

const App = () => {
  const [openModal, setOpenModal] = useState('none')

  const close = () => setOpenModal('none')
  return (
    <div>
      <Logo />
      <h2>Bookshelf</h2>
      <button onClick={() => setOpenModal('login')}>Login</button>
      <button onClick={() => setOpenModal('register')}>Register</button>
      <Dialog isOpen={openModal === 'login'} onDismiss={close}>
        <p>Login dialog</p>
      </Dialog>
      <Dialog isOpen={openModal === 'register'} onDismiss={close}>
        <p>register dialog</p>
      </Dialog>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}
