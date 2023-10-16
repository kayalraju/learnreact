import React, { useEffect, useState } from 'react'

const UserFetchData = () => {
    const [user,setUser]=useState([])
    const getUSer=async()=>{
           const response=await fetch('https://jsonplaceholder.typicode.com/users')
           setUser(await response.json())
    }
    useEffect(()=>{
       getUSer() 
    },[])
    console.log(user);
  return (
    <>
      <div className='container'>
        <div className="row">
            {
                user.map((item,key)=>{
                    return(
                        <>
                        <h1>{item.name}</h1>
                        </>
                    )
                })
            }
        </div>

      </div>
    </>
  )
}

export default UserFetchData
