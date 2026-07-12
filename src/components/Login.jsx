import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const VITEAPI = import.meta.env.VITE_API ||  'http://localhost:5000'

const Login = () => {

    const [email, setemail] = useState('')
    const [password,setpassword] = useState('')

    const navigate  = useNavigate()
    const handleSubmit =async(e)=>{
        e.preventDefault()
      const response = await fetch(`${VITEAPI}/api/user/login`, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
      })

      const data =await response.json()
      console.log(data)
     navigate('/welcome')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email"  value={email} onChange={(e)=>setemail(e.target.value)}/>
        <label> Password</label>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button type='submit'>LOGIN</button>
        </form>
    </div>
  )
}

export default Login