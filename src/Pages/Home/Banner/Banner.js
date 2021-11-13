import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="text-white">
      <div id="carouselExampleCaptions" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ibb.co/R2QTS0j/apartment-1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">4 Beds Exclusive Luxury Apartment Sell</h5>
              <p className="text-white">Bedrooms - 4, Bathrooms 2, Square Feet 5300 - 5455 sq ft",
                "price": "5250000</p>
              <div className="btn btn-info fw-bold">See more...</div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/wBjtWwH/apartment-2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Silent Ischemia</h5>
              <p className="text-white">A form of coronary artery disease in which the blood flow to the heart muscle is reduced but produces very little pain or symptoms.</p>
              <div className="btn btn-info fw-bold">See more...</div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/hMB2sK4/apartment-3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Angina</h5>
              <p className="text-white">Angina is discomfort or pain that occurs when your heart is not getting enough oxygen and nutrients. Angina may be caused by a narrowing of the arteries or muscle spasms in the coronary arteries.</p>
              <div className="btn btn-info fw-bold">See more...</div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;