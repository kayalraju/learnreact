import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchStudent = () => {
    const [user, setUser] = useState([])
    const Url = 'https://tureappservar.onrender.com'
    const imgUrl = 'https://tureappservar.onrender.com'

    const getAllUser = async () => {
        const response = await axios.get(`${Url}/alluser`)
        setUser(response?.data)
    }

    useEffect(() => {
        getAllUser()
    }, [])
    console.log('g', user);
    return (
        <>
            <div className="container">
                <h1>Fetch all User</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="row">name</th>
                            <td>email</td>
                            <td>city</td>
                            <td>phone</td>
                            <td>image</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user?.data?.map((item, key) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{item.name}</th>
                                            <td>{item.email}</td>
                                            <td>{item.city}</td>
                                            <td>{item.phone}</td>
                                            <td><img src={`${imgUrl}/${item?.photo}`} alt="" height="50px" width="50px"/></td>
                                        </tr>
                                    </>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FetchStudent
