import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Nav = () => {
  let nav=useNavigate();
  let[searchName,setsearchName]=useState("")
  function searchHandeler(e){
    e.preventDefault();
    let param=new URLSearchParams({userSearchName:searchName})
    nav(`/?${param.toString()}`)
  }
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href=" ">Navbar</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
      onChange={(e)=>setsearchName(e.target.value)}/>
      <button type="button" className="btn btn-secondary" onClick={(e)=>searchHandeler(e)}>Search</button>
    </form>
    <button type="button" className="btn btn-primary"  onClick={()=>nav('/add')}>AddUser</button>
  </div>
</nav>
    </div>
  )
}
