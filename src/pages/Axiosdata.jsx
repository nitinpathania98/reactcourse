import React from 'react'
import axios  from 'axios'
import { useEffect,useState } from 'react'

function Axiosdata() {
    const[old,setNew]=useState([ ])
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((res)=>{
            setNew(res.data.products)
        })
    },[])
    
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-4 animated slideInDown">Axiosdata</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Axiosdata</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}
            <div className="container py-5 px-5">
                <div className="row border">
                    {old.map((result)=>(
                        <div className="col-lg-4 border px-2 py-2">
                            <img src={result.images[0]} alt="" width="100%" height="200px"  className='px-2 py-2 border'/>
                            <h2><b>{result.title}</b></h2>
                            <p>{result.description}</p>
                            <p><span><del>$</del></span></p>
                            <button>ADD TO CART</button>
                            <button>View Now</button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Axiosdata