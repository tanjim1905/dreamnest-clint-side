import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './BuyAppartmets.css';

const BuyApartment = () => {
    const [singleApartment, setSingleApartment] = useState({});
    const [buyApartmentInfo, setBuyApartmentInfo] = useState({});
    const { apartmentId } = useParams();

    const { user } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newBuyApartmentInfo = { ...buyApartmentInfo };
        newBuyApartmentInfo[field] = value;
        setBuyApartmentInfo(newBuyApartmentInfo);
        console.log(newBuyApartmentInfo);
    }

    useEffect(() => {
        fetch(`http://localhost:7000/singleapartment/${apartmentId}`)
            .then(res => res.json())
            .then(data => setSingleApartment(data));
    }, []);

    const handleBuyApartment = (e) => {
        const buyApartment = {
            ...buyApartmentInfo,
            singleApartment,
        }

        fetch('http://localhost:7000/buyapartments', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(buyApartment)
        })
            .then(res => res.json())
            .then(data => {
                setBuyApartmentInfo(data);
            })

        console.log(buyApartment);
        e.preventDefault();
    }
    return (
        <>
            <div className="container my-5">
                <h2 className="text-center mb-4">BuyApartment</h2>
                <div className="card mb-3" style={{ maxWidth: "100%" }}>
                    <div className="row g-0" >
                        <div className="col-md-4" >
                            <img src={singleApartment?.imgUrl} className="img-fluid" alt="..." style={{ height: "100%", width: "" }} />
                        </div>
                        <div className="col-md-8" >
                            <div className="card-body" >
                                <h5 className="card-title" > {singleApartment?.title} </h5>
                                <p className="card-text" >Price: <span className="fw-bold">{singleApartment?.price}</span></p>
                                <p className="card-text" >Address: {singleApartment?.address}</p>
                                <p className="card-text" >{singleApartment?.details}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="get-in-touch">
                    <h1 className="title">Client Information</h1>
                    <h2 className="text-center">Please! Send Your Information.</h2>
                    <form onSubmit={handleBuyApartment} className="contact-form row">
                        <div className="form-field col-lg-6">
                            <label className="label">Name</label>
                            <input onBlur={handleOnBlur} name="name" placeholder="Type Your Name" defaultValue={user?.displayName} id="name" className="input-text js-input" type="text" required />

                        </div>
                        <div className="form-field col-lg-6 ">
                            <label className="label" for="email">E-mail</label>
                            <input defaultValue={user?.email} onBlur={handleOnBlur} name="email" placeholder="Type Your Email" id="email" className="input-text js-input" type="email" required />

                        </div>
                        <div className="form-field col-lg-6 ">
                            <label className="label" for="company">Address</label>
                            <input onBlur={handleOnBlur} name="address" placeholder="Type Your Address" id="company" className="input-text js-input" type="text" required />

                        </div>
                        <div className="form-field col-lg-6 ">
                            <label className="label" for="phone">Contact Number</label>
                            <input onBlur={handleOnBlur} name="number" placeholder="Type Your Contact Number" id="phone" className="input-text js-input" type="text" required />

                        </div>
                        <div className="form-field col-lg-12">
                            <label className="label" for="message">Write Something About Yourself / Profession</label>
                            <input onBlur={handleOnBlur} name="about" placeholder="Write something..." id="message" className="input-text js-input" type="text" required />

                        </div>
                        <div className="form-field col-lg-12">
                            <input className="submit-btn" type="submit" value="Submit" />
                        </div>
                    </form>

                    {buyApartmentInfo?.insertedId && <div class="alert alert-primary" role="alert">
                    Ordered Added Successfully
                  </div>}
                </section>
            </div>
        </>
    );
};

export default BuyApartment;