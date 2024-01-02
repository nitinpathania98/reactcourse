import React from 'react'
import Homeslider from '../component/Homeslider'

export default function Testimonial() {
    return (    
        <div>
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-4 animated slideInDown">Testimonial</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Testimonial Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Testimonial</p>
                        <h1 className="display-5 mb-5">What Our Clients Say!</h1>
                    </div>
                    <div className=" testimonial-carousel wow fadeInUp" data-wow-delay="0.3s">
                       <Homeslider/>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
        </div>
    )
}
