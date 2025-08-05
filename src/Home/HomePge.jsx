import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

export const HomePge = () => {
    let[database,setDatabase]=useState([])
let nav=useNavigate();
let location=useLocation();
let param=new URLSearchParams(location.search)
let searchName=param.get('userSearchName')

    useEffect(()=>{
      if(searchName && searchName!=null){
        axios.get(`http://localhost:8081/stu/find/${searchName}`)
        .then(resp=>setDatabase(resp.data))
      }
      else{
        axios.get('http://localhost:8081/stu/readAllstu')
        .then(resp=>setDatabase(resp.data))
      }
    },[searchName])
    function deleteHandeler(id){
      axios.delete(`http://localhost:8081/stu/delete/${id}`)
        .then(()=>window.location.reload());
      
    }
  return (
    <div>
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Phone No</th>
      <th  scope="col">Action</th>
      
       
    </tr>
  </thead>
  <tbody>
    {
        database.map((val,index)=>{
            return <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                <td>{val.phoneNo}</td>
                <td class="d-flex justify-content-evenly">
                 <button type="button" class="btn btn-warning" onClick={() => nav(`/view/${val.id}`)}>View</button>
                  <button type="button" class="btn btn-warning" onClick={() => nav(`/edit/${val.id}`)}>Edit</button>
                  <button type="button" class="btn btn-danger" onClick={()=>deleteHandeler(val.id)}>Delete</button>
                </td>
            </tr>
        })
    }
    
  </tbody>
</table>

    </div>
  )
}
