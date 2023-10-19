import React from 'react'
import image1 from '../images/Raghavan.jpg'
import image2 from '../images/Atul.jpg'
import image3 from '../images/Anirban.jpg'
import image4 from '../images/Rpsingh.jpg'
import image5 from '../images/Anindita.jpg'
import image6 from '../images/Amit.jpg'
import './Carousel.css';

const Carousel = () => {
    return (
        <div id='home' className='my-5'>
            <div id="carouselExampleAutoplaying" className="carousel slide custom-carousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="..." style={{"height": "400px"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." style={{"height": "400px"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..." style={{"height": "400px"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={image4} className="d-block w-100" alt="..." style={{"height": "400px"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={image5} className="d-block w-100" alt="..." style={{"height": "400px"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={image6} className="d-block w-100" alt="..." style={{"height": "400px"}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
