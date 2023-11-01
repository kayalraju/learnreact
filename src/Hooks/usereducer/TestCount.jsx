import React, { useReducer } from 'react'


const initialstate=0
function reducer(state,action){
    switch(action.type){
        case "incriment":
            return state + 1
        case "decriment":
            return state - 1
            default:
                throw new Error
    }

}
const TestCount = () => {
    
    const [state,dispatch]=useReducer(reducer,initialstate)
  return (
    <>
    <h1>User Reducer Hooks</h1>
    <h1>{state}</h1>

    <button onClick={()=>dispatch({type:"incriment"})} >Incriment</button>
    <button onClick={()=>dispatch({type:"decriment"})}>Decririment</button>
      
    </>
  )
}

export default TestCount
