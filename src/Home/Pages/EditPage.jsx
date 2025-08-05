import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditPage = () => {
  let[userName,setuserName]=useState("")
  let[userAge,setuserAge]=useState("")
  let[userEmail,setuserEmail]=useState("")
    let[userPassword,setuserPassword]=useState("")
      let[userphoneNo,setuserphoneNumber]=useState("")
      let nav=useNavigate()
      let {id}=useParams();
      useEffect(()=>{
        axios.get(`http://localhost:8081/stu/getById/${id}`)
        .then(resp=>{
          setuserName(resp.data.name)
          setuserAge(resp.data.age)
          setuserEmail(resp.data.email)
          setuserPassword(resp.data.password)
          setuserphoneNumber(resp.data.phoneNo)
        })
        },[])
      
      function updateUser(){
        axios.put(`http://localhost:8081/stu/edit/${id}`,{
          name:userName,
          age:userAge,
          email:userEmail,
          password:userPassword,
          phoneNo:userphoneNo
        })
        .then(nav('/'))
        .then(()=>window.location.reload())

      }
  return (
    <div>
      <center>
        <h1>Welcome to edit page</h1>
      </center>
      <form className='container'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
     placeholder='Enter your name' onChange={(e)=>setuserName(e.target.value)} value={userName}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder='Enter your age' onChange={(e)=>setuserAge(e.target.value)} value={userAge}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">email</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
     placeholder='Enter your email' onChange={(e)=>setuserEmail(e.target.value)} value={userEmail}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
    <input type="text" className="form-control" id="exampleInputEmail1"
     placeholder='Enter your password' onChange={(e)=>setuserPassword(e.target.value)} value={userPassword}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">PhoneNumber</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
     placeholder='Enter your phno' onChange={(e)=>setuserphoneNumber(e.target.value)} value={userphoneNo}/>
  </div>
  <div className="d-flex justify-content-around">
<button type="button" className="btn btn-danger" onClick={()=>nav('/')}>Back</button>
  
  <button type="submit" className="btn btn-success" onClick={()=>updateUser()}>Update User</button>
  </div>
</form>

    </div>
  )
}
