import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const GetUserData = () => {
    const [user, setUser] = useState([])
    const Url = 'https://jsonplaceholder.typicode.com'

    const GetData = async () => {
        try {
            const response = await axios.get(`${Url}/users`)
            setUser(response?.data)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        GetData()
    }, [])

    console.log('gg', user);
    return (
        <>
            <h1>Get user data Using Axios</h1>

            <div className="container">
                <div className="row">
                    {
                        user?.map((item, key) => {
                            return (
                                <>
                                    <div className="col-md-3" key={key}>
                                        <div class="card" style={{width: "18rem"}}>
                                            <img src="..." class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{item?.name}</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <Link to={`/userdetails/${item.id}`} class="btn btn-primary">user Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default GetUserData
