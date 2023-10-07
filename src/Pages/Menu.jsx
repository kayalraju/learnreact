import React from 'react'
import { useParams } from 'react-router-dom'

const Menu = () => {
 const {id,name}= useParams()
  return (
    <>
      <h1>Menu page</h1>
      <h1>{id} / {name}</h1>
    </>
  )
}

export default Menu
