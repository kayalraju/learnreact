import React, { useState } from 'react'

const UserForm = () => {
    const initialstate={
        name:"",
        city:""
    }
    const[formvalue,setFormValue]=useState(initialstate)
    const[formError,setFormError]=useState({})

    //form validate
    const validate=(values)=>{
        const error={};
        if(!values.name){
            error.name="user name is required"
        }
        if(!values.city){
            error.city=" city name is required"
        }

        return error

    }

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormValue({...formvalue,[name]:value})
        console.log(formvalue);
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        setFormError(validate(formvalue))
        //console.log(formvalue);
        

    }
  return (
    <>
    <div className="container">
        <h1>User Form</h1>
    <form onSubmit={handlesubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control"
    name='name'
    value={formvalue.name}
    onChange={handleChange}
    />
<b style={{color:"red"}}>{formError.name}</b>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">city</label>
    <input type="text" class="form-control" 
    name='city'
    value={formvalue.city}
    onChange={handleChange}
    />
    <b style={{color:"red"}}>{formError.city}</b>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
      
    </>
  )
}

export default UserForm
