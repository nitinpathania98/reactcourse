import React from 'react'
import { useState } from 'react';

const State = () => {

    const [post, setPost] = useState("img/image.png");

    const ImageChanger = (img) => {
        setPost(img);

    }



    return (
        <div>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-4 animated slideInDown">State</h1>
                    <nav aria-label="breadcrumb animated slideInDown"> 
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a href="/pages">Pages</a></li>
                            <li class="breadcrumb-item active" aria-current="page">State</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            <div class="services">
                <div class="ourservices">
                    <h2>Our Services</h2>
                    <button onClick={() => (ImageChanger("img/image2.png"))} >Internal Medicine</button>
                    <hr />
                    <button onClick={() => (ImageChanger("img/image1.png"))} >Nephrology</button>
                    <hr />
                    <button onClick={() => (ImageChanger("img/image4.png"))} >Preventative Care</button>
                    <hr />

                </div>
                <div class="adv">
                    <br />
                    <br />
                    <img src={post} alt="" width="40%" />
                    <h2>jackson</h2>
                    <p>
                        Hashimoto's Thyroiditis / Rheumatoid Arthritis <br />/ Inflammatory Bowel
                        Disease (IBD) / Lupus
                    </p>
                    <button>Learn More</button>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default State
// const State = () => {
//     const [post, setpost] = useState("img/image2.png");
//     const [titleChange, setTitleChange] = useState("max");
//     const imageChanger = (img, title) => {
//         setpost(img);
//         setTitleChange(title);
