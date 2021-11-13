import React, { useEffect, useState } from 'react';
import Apartment from '../Apartments/Apartment/Apartment';
import Banner from './Banner/Banner';
import CustomarReviews from './CustomarReviews/CustomarReviews';
import Team from './Teams/Team';

const Home = () => {
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        fetch('https://polar-plains-82762.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => setApartments(data));
    }, []);
    return (
        <div>
            <Banner></Banner>

            <div className="container mt-2 mb-5">
                <h2 className="text-center my-4">Our Available Apartments</h2>
                <p className="text-center">We are provides the best quality of service in this city. We determine to fullfill your dream as well as you want.</p>
                <div className="row g-4">
                    {
                        apartments.slice(0, 6).map(apartment => <Apartment
                            key={apartment._id}
                            apartment={apartment}
                        ></Apartment>)
                    }
                </div>
            </div>

            <CustomarReviews></CustomarReviews>

            <Team></Team>
        </div>
    );
};

export default Home;