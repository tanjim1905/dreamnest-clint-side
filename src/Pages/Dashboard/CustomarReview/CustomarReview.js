import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../Hooks/useAuth';

const CustomarReview = () => {
    const [customarReview, setCustomarReview] = useState({});
    const { user } = useAuth();
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newCustomarReview = { ...customarReview };
        newCustomarReview[field] = value;
        setCustomarReview(newCustomarReview);
        console.log(newCustomarReview);
    }

    const handleCustomarReview = (e) => {
        const customarReviewInfo = {
            ...customarReview,
            user
        }

        fetch('https://dreamnest-de855.web.app/customarreview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(customarReviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCustomarReview(data);
            })

        // console.log(customarReview);
        e.preventDefault();
    }
    return (
        <div className="col py-3 container d-flex justify-content-center mt-5">
            <div>
                <h2 className="text-center mb-3">Send Your Feedback Us</h2>
                <form onSubmit={handleCustomarReview}>
                    <input className="p-2 rounded w-75" onBlur={handleOnBlur} placeholder="Write something details" type="text" name="details" id="" /><br /><br />
                    <ReactStars size={30}></ReactStars>
                    <input className="fw-bold bg-info rounded border-0 py-1 px-3" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default CustomarReview;