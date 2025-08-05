import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
export const ViewPage = () => {

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
  return (
    <div>
        
        <p>The user name is <input type="text" value={userName}/></p>
         <p>The user age is<input type="text" value={userAge} /></p>
          <p>The user email is  <input type="text"value={userEmail} /></p>
          <p>The user password is <input type="text" value={userPassword} /></p> 
           <p>The user phno is <input type="text"  value={userphoneNo}/></p> 

    </div>
  )
}
