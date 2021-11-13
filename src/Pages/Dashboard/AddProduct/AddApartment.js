import React, { useState } from 'react';

const AddApartment = () => {
    const [addApartment, setAddApartment] = useState({});
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newAddApartment = { ...addApartment };
        newAddApartment[field] = value;
        setAddApartment(newAddApartment);
        console.log(newAddApartment);
    }

    const handleAddApartment = (e) => {
        const addAApartment = {
            ...addApartment
        }

        fetch('https://polar-plains-82762.herokuapp.com/apartments', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addAApartment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAddApartment(data);
            })
        e.preventDefault();
    }
    return (
        <div className="col py-3">
            <h2 className="text-center mb-3">Add an Apartment</h2>

            <div className="d-flex justify-content-center">
                <form onSubmit={handleAddApartment}>
                    <input className="p-2 rounded" onBlur={handleOnBlur} placeholder="Drop an img url" type="text" name="imgUrl" id="" /><br /><br />
                    <input className="p-2 rounded" onBlur={handleOnBlur} placeholder="Type a title" type="text" name="title" id="" /><br /><br />
                    <input className="p-2 rounded" onBlur={handleOnBlur} placeholder="Write short description" type="text" name="description" id="" /><br /><br />
                    <input className="p-2 rounded" onBlur={handleOnBlur} placeholder="Type your price" type="text" name="price" id="" /><br /><br />
                    <input className="p-2 rounded" onBlur={handleOnBlur} placeholder="Type the address" type="text" name="address" id="" /><br /><br />
                    <input className="p-2 rounded" onBlur={handleOnBlur} placeholder="Write something details" type="text" name="details" id="" /><br /><br />
                    <input className="fw-bold bg-info rounded border-0 py-1 px-3" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddApartment;