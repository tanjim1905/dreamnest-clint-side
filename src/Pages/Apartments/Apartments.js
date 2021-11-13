import React, { useEffect, useState } from 'react';
import Apartment from './Apartment/Apartment';

const Apartments = () => {
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/apartments')
            .then(res => res.json())
            .then(data => setApartments(data));
    }, []);
    return (
        <div>
            <div className="container mt-2 mb-4">
                <h2 className="text-center my-4">Our Available Apartments</h2>
                <p className="text-center">We are provides the best quality of service in this city. We determine to fullfill your dream as well as you want.</p>
                <div className="row g-4">
                    {
                        apartments.map(apartment => <Apartment
                            key={apartment._id}
                            apartment={apartment}
                        ></Apartment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apartments;