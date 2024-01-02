import React from 'react'

import { useState } from 'react'
import axios from 'axios'

function Login() {
    const [pdata, setData] = useState({
        username: "",
        email: "",
        password: ""

    })

    //................
    const DataChange = (e) => {
        setData({
            ...pdata,
            [e.target.name]: e.target.value
        })
    }
    //........onsubmit

    const DataSend = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: "https://jsonplaceholder.typicode.com/comments",
            data: pdata
        }).then((res) => {
            alert(res.data)
            console.log(res.data)
        }).then((error) => {
            console.log(error)
        })

    }
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-4 animated slideInDown">LogIn</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/page">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">LogIn</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            {/* login page */}
            <div className="container bg-black">
                <div className="row px-5 py-5 ">
                    <div className="col-lg-5 px-2 py-2 bg-red">
                        <form onSubmit={DataSend} method="post" >

                            <div className='col-md-6'> <label htmlFor="">USERNAME</label> <input type="text" name="username"
                                value={pdata.username}
                                onChange={DataChange}

                            />

                            </div>

                            <div className='col-md-6'> <label htmlFor="">ENTER EMAIL</label> <input type="email" name="email"
                                value={pdata.email}
                                onChange={DataChange}

                            />

                            </div>

                            <div className='col-md-6'>  <label htmlFor="">PASSWORD</label> <input type="password" name="password"
                                value={pdata.password}
                                onChange={DataChange}
                            />

                            </div>
                            <div className="col-12">
                                <input type="Submit" placeholder='Login' />
                            </div>

                        </form>
                    </div>
                    <div className="col-lg-5 px-2 py-2">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login