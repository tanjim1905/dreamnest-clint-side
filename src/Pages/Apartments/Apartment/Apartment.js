import React from 'react';
import { Link } from 'react-router-dom';

const Apartment = (props) => {
    const { imgUrl, title, description, _id, price,  } = props.apartment;
    return (
        <div className="col-sm-12 col-md-6 text-center">
            <div className="card">
                <img style={{ height: "300px" }} className="card-img-top" src={imgUrl} alt="the alt text here" />
                <div className="card-body">
                    <h5 className="card-title text-primary">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p>Price: <span className="fw-bold">{price}</span></p>
                    <Link to={`/buyapartment/${_id}`} className="btn btn-outline-dark">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Apartment;