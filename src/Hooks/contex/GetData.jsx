import React, { useContext } from 'react'
import CreateContex from './notes/CreateContex'

const GetData = () => {
    const data=useContext(CreateContex)
  return (
    <div>
        <h1>get data componenet</h1>
      <h1>name {data.name}</h1>
    </div>
  )
}

export default GetData
