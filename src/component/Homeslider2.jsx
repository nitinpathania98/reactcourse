import React from 'react'
import Slider from 'react-slick'

export default function Homeslider2() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div>
            <div>
                <Slider {...settings}>
                    <div>
                        <div class="project-item pe-5 pb-5">
                            <div class="project-img mb-3">
                                <img class="img-fluid rounded" src="img/service-1.jpg" alt="" />
                                <a href=""><i class="fa fa-link fa-3x text-primary"></i></a>
                            </div>
                            <div class="project-title">
                                <h4 class="mb-0">Financial Planning</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="project-item pe-5 pb-5">
                            <div class="project-img mb-3">
                                <img class="img-fluid rounded" src="img/service-2.jpg" alt="" />
                                <a href=""><i class="fa fa-link fa-3x text-primary"></i></a>
                            </div>
                            <div class="project-title">
                                <h4 class="mb-0">Cash Investment</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="project-item pe-5 pb-5">
                            <div class="project-img mb-3">
                                <img class="img-fluid rounded" src="img/service-3.jpg" alt="" />
                                <a href=""><i class="fa fa-link fa-3x text-primary"></i></a>
                            </div>
                            <div class="project-title">
                                <h4 class="mb-0">Financial Consultancy</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="project-item pe-5 pb-5">
                            <div class="project-img mb-3">
                                <img class="img-fluid rounded" src="img/service-4.jpg" alt="" />
                                <a href=""><i class="fa fa-link fa-3x text-primary"></i></a>
                            </div>
                            <div class="project-title">
                                <h4 class="mb-0">Business Loans</h4>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
            
        </div>
    )
}
