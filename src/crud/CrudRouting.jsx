import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import FetchUsers from './FetchUsers'
import AddUser from './AddUser'
import Edit from './Edit'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CrudRouting = () => {
  return (
    <>
     <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<FetchUsers/>}/>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default CrudRouting
