import React, { useState } from 'react'

const StateObject = () => {
    const initialState={
        name:"Pritam",
        email:"pritam@gmail.com",
        
        phone:"9966369856"
    }
    const [student,setStudent]=useState(initialState)
    const [data,setData]=useState("sdjgfjsd")

    const changeobj=()=>{
        setStudent({...student , email:"pritam123456@gmail.com", phone:"1234567890"})
    }
  return (
    <>
      <h1>
        name is {student.name} <br />
        email is {student.email}<br/>
        phone is {student.phone}
      <br/>
      <button onClick={changeobj}>update state</button>
      </h1>
    </>
  )
}

export default StateObject
