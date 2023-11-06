
import React from 'react'
import CreateContex from './CreateContex'


const GetContex = ( {children}) => {
    const state={
        name:"Pritam",
        email:"pritam@gmail.com",
        phone:"9988965896"
    }
  return (
    <>
      <CreateContex.Provider value={state}>
            {children}
      </CreateContex.Provider>
    </>
  )
}

export default GetContex
