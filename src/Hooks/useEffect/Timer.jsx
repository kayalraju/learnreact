import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [counttime,setCountTime]=useState(0)
    
    useEffect(()=>{
        setTimeout(()=>{
            setCountTime((count)=> count +1 )
            console.log('dhhd');

        },1000)
    })
  return (
    <>
      <h1>useEffect hooks</h1>
      <h1>Time : {counttime}</h1>
    </>
  )
}

export default Timer
