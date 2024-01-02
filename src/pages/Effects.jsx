import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ADDTOCART } from '../action';
import { useDispatch } from 'react-redux';


function Effects() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const usedispatches = useDispatch();


    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setData(data.products)
            }, [])
    })

    ///.............pageview........../////
    const pageview = (id, images, title, description) => {
        navigate("/Product", {
            state: {
                id: id,
                images: images,
                title: title,
                description: description
            }
        });
    }
    return (
        <div>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-4 animated slideInDown">useEffects fetch API</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Effects</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}
            <div className='container'>
                <div className='row'>

                    {data && data.map((result) => (
                        <div className='col-lg-6 border py-2 text-justify'>
                            <p>{result.id}</p>
                            <img src={result.images[0]} style={{ height: "200px" }} alt="" />
                            <p><b>modle: </b>{result.title}</p>
                            <p style={{ height: "80px" }}><b>Description: </b>{result.description}</p>
                            <button className='btn btn-primary mx-3' onClick={() => usedispatches(ADDTOCART({
                                id: result.id,
                                title: result.title,
                                description: result.description
                            }))}>Add to Cart</button>
                            <button className='btn btn-primary' onClick={() => pageview(
                                result.id,
                                result.images[0],
                                result.title,
                                result.description
                            )}>View Now</button>
                        </div>

                    )
                    )}


                </div>

            </div>
        </div>
    )
}

export default Effects