import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import GetUserData from './GetUserData'
import Post from './Post'
import UserDetails from './UserDetails'

const AxiosRoute = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<GetUserData/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/userdetails/:id' element={<UserDetails/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default AxiosRoute
