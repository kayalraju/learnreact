import React from 'react'
import { useContext } from 'react'
import CreateContex from './notes/CreateContex'

const GetUser = () => {
    const data=useContext(CreateContex)
    console.log(data);
  return (
    <div>
      <h1>Get USer componenet</h1>

      <h1>Name: {data.name}</h1>
      <h1>Email: {data.email}</h1>
      <h1>Phone: {data.phone}</h1>
    </div>
  )
}

export default GetUser
