import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import UsersList from './components/UsersList'
import UserForm from './components/UserForm'

function App() {
  
const [usersList, setUsersList] = useState([])
const [form, setForm] = useState(false)
const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios.get (`https://users-crud.academlo.tech/users/`)
    .then(res => setUsersList(res.data))
  }

  const selectUser = (user) => {
    setForm(true)
    setUserSelected(user)
  }

  return (
    <div className="App">
      { form &&
        <UserForm 
        setForm={setForm}
        getUsers={getUsers}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
        />
      }
      <UsersList 
      usersList={usersList}
      setForm={setForm}
      selectUser={selectUser}
      getUsers={getUsers}
      />
    </div>
  )
}

export default App
