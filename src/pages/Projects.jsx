import React from 'react'
import Homeslider2 from '../component/Homeslider2'

export default function Projects() {
    return (
        <div>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container">    
                    <h1 class="display-3 mb-4 animated slideInDown">Projects</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Projects</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Projects Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Projects</p>
                        <h1 class="display-5 mb-5">We Have Completed Latest Projects</h1>
                    </div>
                    <div class=" project-carousel wow fadeInUp" data-wow-delay="0.3s">
                        <Homeslider2/>
                    </div>
                </div>
            </div>
            {/* <!-- Projects End --> */}
        </div>
    )
}
