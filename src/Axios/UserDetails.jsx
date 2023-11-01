import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'

const UserDetails = () => {
  const {id}=useParams()
  const [userDetails,setUserdetails]=useState({})
  const [loading,setLoading]=useState(true)
  const Url='https://jsonplaceholder.typicode.com/users'

const getUserDetails=async()=>{
  try{
    const response=await axios.get(`${Url}/${id}`)
    setUserdetails(response)
    setLoading(false)
  }catch(error){
    console.log('error'+ error);
  }

}
useEffect(()=>{
  getUserDetails()
},[])

if(loading){
  return <Loading/>

}
console.log('j',userDetails);
  return (
    <div>
      <h1>User Details page</h1>
      <h1>name {userDetails?.data?.name}</h1>
    </div>
  )
}

export default UserDetails
