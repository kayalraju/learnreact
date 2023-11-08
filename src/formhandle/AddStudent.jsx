import React, { useState } from 'react'
import axios from 'axios'

const AddStudent = () => {
    const initialstate = {
        name: "",
        city: "",
        email: "",
        phone: "",
        photo: ""
    }
    const [user, setUser] = useState(initialstate)
    const [img, setimg] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    
  const onSubmit = (data) => {
    data.preventDefault()
    const apiUrl = "https://tureappservar.onrender.com/user";
    let formdata=new FormData()
    formdata.append("name",user.name)
       formdata.append("city",user.city)
       formdata.append("email",user.email)
       formdata.append("phone",user.phone)
       formdata.append("photo",img)
    axios.post(apiUrl, formdata)
     
  };
    return (
        <>           
            <div classNameName="container">
                <div className="card">
                    <div className="card-header">
                        student SignUp Form 
                    </div>
                    <div className="card-body">
                        <form >
                            <div className="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" name='name' className="form-control"
                                    onChange={handleChange}
                                    value={user.name}
                                />

                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" name='email'
                                    onChange={handleChange}
                                    value={user.email}
                                />


                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">phone</label>
                                <input type="number" name='phone' className="form-control"
                                    onChange={handleChange}
                                    value={user.phone}
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">city</label>
                                <input type="text" name='city' className="form-control"
                                    onChange={handleChange}
                                    value={user.city}
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">photo</label>
                                <input
                                    type="file"
                                    onChange={(e) => setimg(e.target.files[0])}
                                    name="img"
                                    accept="image/*"
                                    class="form-control"
                                />
                                {img !== "" && img !== undefined && img !== null ? (
                                    <img
                                        style={{ height: "180px" }}
                                        src={URL.createObjectURL(img)}
                                        alt=""
                                        className="upload-img"
                                    />
                                ) : (
                                    <>{img === "" && <p>Drag or drop content here</p>}</>
                                )}
                            </div>

                            <button type="submit" onClick={onSubmit} className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStudent