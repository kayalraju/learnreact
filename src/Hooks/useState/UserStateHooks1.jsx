import React, { useState } from 'react'

const UserStateHooks1 = () => {

const [user,setUser]=useState("Pritam")

const changeNAme=()=>{
  var name=user
  if(name == "Pritam"){
    setUser('subir')
  }else{
    setUser('Pritam')
  }
 
}
  return (
    <>
    <h1>hello world</h1>

    <h1>name is {user}</h1>

    <button onClick={changeNAme}>click me</button>
      
    </>
  )
}

export default UserStateHooks1
