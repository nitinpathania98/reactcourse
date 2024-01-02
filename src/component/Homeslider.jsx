import React from 'react'
import Slider from "react-slick"

export default function Homeslider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
            <Slider {...settings}>
                <div>
                    <div class="testimonial-item ">
                        <div class="testimonial-text border rounded p-4 pt-5 mb-5">
                            <div class="btn-square bg-white border rounded-circle">
                                <i class="fa fa-quote-right fa-2x text-primary"></i>
                            </div>
                            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                        </div>
                        <img class="rounded-circle mb-3 m-auto" src="img/testimonial-1.jpg" alt="" />
                        <h4>Client Name</h4>
                        <span>Profession</span>
                    </div>



                </div>
                <div>
                    <div class="testimonial-item ">
                        <div class="testimonial-text border rounded p-4 pt-5 mb-5">
                            <div class="btn-square bg-white border rounded-circle">
                                <i class="fa fa-quote-right fa-2x text-primary"></i>
                            </div>
                            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                        </div>
                        <img class="rounded-circle mb-3 m-auto" src="img/testimonial-2.jpg" alt="" />
                        <h4>Client Name</h4>
                        <span>Profession</span>
                    </div>
                </div>
                <div>
                    <div class="testimonial-item ">
                        <div class="testimonial-text border rounded p-4 pt-5 mb-5">
                            <div class="btn-square bg-white border rounded-circle">
                                <i class="fa fa-quote-right fa-2x text-primary"></i>
                            </div>
                            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                        </div>
                        <img class="rounded-circle mb-3 m-auto" src="img/testimonial-3.jpg" alt="" />
                        <h4>Client Name</h4>
                        <span>Profession</span>
                    </div>
                </div>
                <div>
                    <div class="testimonial-item ">
                        <div class="testimonial-text border rounded p-4 pt-5 mb-5">
                            <div class="btn-square bg-white border rounded-circle">
                                <i class="fa fa-quote-right fa-2x text-primary"></i>
                            </div>
                            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                        </div>
                        <img class="rounded-circle mb-3 m-auto" src="img/testimonial-4.jpg" alt="" />
                        <h4>Client Name</h4>
                        <span>Profession</span>
                    </div>
                </div>

            </Slider>
        </div>
    )
}
