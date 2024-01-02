import React from 'react'

export default function Teamcard(props) {
    return (
        
            
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item">
                        <img class="img-fluid rounded" src={props.image} alt="" />
                        <div class="team-text">
                            <h4 class="mb-0">{props.name}</h4>
                            <div class="team-social d-flex">
                                <a class="btn btn-square rounded-circle mx-1" href=""><i
                                    class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square rounded-circle mx-1" href=""><i
                                    class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            
        
    )
}
