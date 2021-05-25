import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import UserForm from './UserForm';

function App() {
  const [users, setUsers] = useState([])
  const [showForm, setShowForm] = useState(true)
  const [loading, setLoading] = useState(true)
  // the first param is a function that will be called when 
  // component mounts... (for know)
  // the [] as the argument make this only gets when components
  useEffect(()=>{
    console.log('useEffect called')
    getUsers()
  },[])



  const getUsers = async () => {
     console.log('before axios call with 3 second delay')
     let response = await axios.get('https://reqres.in/api/users')
     console.log('after axios call')
     console.log('response:', response)
     console.log('response.data:',  response.data)
     console.log('response.data.data:',  response.data.data)
     setUsers(response.data.data)
     setLoading(false)
  }


  const deleteUser = (id) => {
    // Note: axios call here... skipping over that for now
    // down the road we would want to remove from the database
    console.log('deleteUser clicked id:', id)
    let newUsers = users.filter( user=>{
      return user.id !== id
    })

    setUsers(newUsers)
  }
  const renderUsers = () => {
    if(loading){
      return <p>Loading users please wait</p>
    } 
    return users.map( user => {
      return (
        <div key={user.id}>
          {user.email}: id: {user.id}
          <p>
            <span onClick={()=> deleteUser(user.id)}>delete</span>
            <span>update</span>
            </p>
        </div>
      )
    })
  }
  const addUser = (user) =>{
    console.log(user)
    setUsers([user, ...users ])
  }
  
  console.log('about to render to DOM')
  return (
    <div className="App">
      <button onClick={()=> setShowForm(!showForm)}>
         {showForm ? "hide form" : "show form"}
      </button>
      { showForm && <UserForm addUser={addUser} /> }
      <h1>Users</h1>
      {renderUsers()}
    </div>
  );
}

export default App;
