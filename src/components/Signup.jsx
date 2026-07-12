import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const VITEAPI = import.meta.env.VITE_API

const Signup = () => {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword]= useState('')

    const handleSubmit = async(e)=>{
    e.preventDefault()

    const response = await fetch(`${VITEAPI}/register`, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    })
   
    const data =await response.json()
    if(response.ok){
        console.log(data)
        setusername('')
        setemail('')
        setpassword('')
    }
    }
  return (
    <div>
<form onSubmit={handleSubmit}>
    <label>Username</label>
    <input type='text' value={username} onChange={(e)=>setusername(e.target.value)}/>
    <label>Email</label>
    <input type='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
    <label>Password</label>
    <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
    <button type='submit'> SIGN UP</button>
</form>
<p>ALREADY SIGNED UP THEN <Link to='/login'>LOGIN</Link></p>
    </div>
  )
}

export default Signup