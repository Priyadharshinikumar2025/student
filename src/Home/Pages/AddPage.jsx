import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AddPage = () => {
  let[userName,setuserName]=useState("")
  let[userAge,setuserAge]=useState("")
  let[userEmail,setuserEmail]=useState("")
    let[userPassword,setuserPassword]=useState("")
      let[userphoneNo,setuserphoneNumber]=useState("")
      let nav=useNavigate()
      function addUser(){
        axios.post(`http://localhost:8081/stu/addUser`,{
          name:userName,age:userAge,email:userEmail,password:userPassword,phoneNo:userphoneNo
        })
        .then(()=>nav('/'))
        .then(()=>window.location.reload)
      }

  return (
    <div>
        <form className='container'>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder='Enter your name' onChange={(e)=>setuserName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Age</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder='Enter your age' onChange={(e)=>setuserAge(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder='Enter your email' onChange={(e)=>setuserEmail(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder='Enter your password' onChange={(e)=>setuserPassword(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">PhoneNumber</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder='Enter your phno' onChange={(e)=>setuserphoneNumber(e.target.value)}/>
  </div>
<button type="button" class="btn btn-danger" onClick={()=>nav('/')}>Back</button>
  
  <button type="submit" class="btn btn-primary" onClick={()=>addUser()}>Add User</button>
</form>
    </div>
  )
}
