import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteUser, getUser } from './Api'

const FetchUsers = () => {
  const [user,setUser]=useState([])


  const getUsersdata = async () => {
    let response = await getUser()
    // console.log(response)
    setUser(response?.data)
}
useEffect(()=>{
  getUsersdata()
},[])
//console.log(user);
//for delete data
const deleteUserData=async(id)=>{
  //alert('jkgjfghfc')
  await deleteUser(id)
  getUsersdata()
}
  return (
    <>
    <div className="container">
        <h1>Fetch All User</h1>
        <Link to="/adduser" className='btn btn-success'>Add-User</Link>
        <table class="table mt-2">
  <thead>
    
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Phone </th>
                        <th> Password </th>
                        <th> City </th>
                        <th> State </th>
                        <th> DOB </th>
                        <th> Action </th>
                    </tr>
    
  </thead>
  <tbody>
    
    {
      user?.map((item,key)=>{
        return(
          <>
          <tr>
      <th scope="row">{item?.id}</th>
      <td>{item?.name}</td>
      <td>{item?.email}</td>
      <td>{item?.phone}</td>
      <td>{item?.password}</td>
      <td>{item?.city}</td>
      <td>{item?.state}</td>
      <td>{item?.dob}</td>
      <td><Link to={`/edit/${item?.id}`} className='btn btn-success'>Update</Link></td>
      <td><button type='button' onClick={() => deleteUserData(item?.id)} className='btn btn-danger'>Delete</button></td>
    </tr>
          </>
        )
      })
    }
    
   
  
  </tbody>
</table>
    </div>
      
    </>
  )
}

export default FetchUsers
