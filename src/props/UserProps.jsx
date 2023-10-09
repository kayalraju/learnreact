import React from 'react'

const UserProps = (props) => {
    const {name,email}=props
    
  return (
    <>
      <h1>Props in reacte js</h1>

    <h1>NAme is {name}</h1>  
    <h1>Email is {email}</h1>  
    </>
  )
}

export default UserProps
