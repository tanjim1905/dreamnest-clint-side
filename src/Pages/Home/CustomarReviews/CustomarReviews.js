import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';

const CustomarReviews = () => {
    const [customarReviews, setCustomarReviews] = useState([]);
    useEffect(() => {
        fetch('https://polar-plains-82762.herokuapp.com/customarreview')
        .then(res => res.json())
        .then(data => setCustomarReviews(data))
    }, [])
    console.log(customarReviews);
    return (
        <div>
            <div className="container">
            <h2 className="text-center">Here is the all reviews our Clients!</h2>

            <div className="row g-4 mt-3 mb-5">
            {
                customarReviews.map(customarReview => <SingleReview
                    key={customarReview._id}
                    customarReview={customarReview}
                    ></SingleReview>)
            }
            </div>
            </div>
        </div>
    );
};

export default CustomarReviews;