import { useState } from 'react'
import Button from './Button'
const UserForm = (props) => {
    const [first_name, set_first_name] = useState('')
    const [last_name, set_last_name] = useState('')
    const [email, set_email] = useState('')
    const handleSubmit = (event) => {
        // this stops page from reloading, which I don't want to happen
        // because it will reset my state
        event.preventDefault()
        console.log('submit')
        console.log(first_name)
        console.log(last_name)
        let newUser = {id: Math.random(), email:email, first_name: first_name, last_name:last_name}
        props.addUser(newUser)
      
    }
    return (
      <div>
          <h1>UserForm</h1>
          <form onSubmit={handleSubmit}>
              <p>first name</p>
              <input 
                value={first_name}
                onChange={(e)=> set_first_name(e.target.value)} 
              />
              <p>last name</p>
              <input value={last_name} 
               onChange={(e)=> set_last_name(e.target.value)}
              />
             <p>email</p>
              <input value={email} 
               onChange={(e)=> set_email(e.target.value)}
              />
              <Button text='add'></Button>
          </form>
      </div>
    )
}

export default UserForm