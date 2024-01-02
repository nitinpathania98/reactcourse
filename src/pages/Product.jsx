import React from 'react'
import { useLocation } from 'react-router-dom'

function Product() {
    const Location = useLocation();
    return (
        <div>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-4 animated slideInDown">Procut Details</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Product</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}
            <div className='container py-5 px-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={Location.state.images} style={{height:"200px"}} />
                    </div>
                    <div className='col-lg-6 text-justify'>
                      
                        <h2>{Location.state.title}</h2>
                        <p>{Location.state.description}</p>
                        <button>+</button>
                        <input type="number" />
                        <button>-</button><br />
                        <button className='btn btn-primary m-3'>Add to Cart</button>
                        <button className='btn btn-primary'>Buy  Now</button>

                    </div>
                </div>
            </div>
        </div>



    )
}

export default Product