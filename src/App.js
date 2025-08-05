import React from 'react'
import { Nav } from './Home/layout/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePge } from './Home/HomePge';
import { AddPage } from './Home/Pages/AddPage';
import { EditPage } from './Home/Pages/EditPage';
import { ViewPage } from './Home/Pages/ViewPage';

export const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' Component={HomePge}/>
      <Route path='/add' Component={AddPage}/>
      <Route path='/edit/:id' Component={EditPage}/>
      <Route path='/view/:id' Component={ViewPage}/>

    </Routes>
    </BrowserRouter>
  )
}
