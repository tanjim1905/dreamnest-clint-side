import React, { useEffect, useState } from 'react';
import ManageSingleApartment from './ManageSingleApartment/ManageSingleApartment';

const ManageAllApartments = () => {
    const [manageAllApartments, setManageAllApartments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/apartments')
            .then(res => res.json())
            .then(data => setManageAllApartments(data));
    }, [])
    return (
        <div>
            <div className="col py-3 container mt-2 mb-4">
                <h2 className="text-center my-4">All Apartments</h2>
                <div className="row g-4">
                    {
                        manageAllApartments.map(manageAllApartment => <ManageSingleApartment
                            key={manageAllApartment._id}
                            manageAllApartment={manageAllApartment}
                        ></ManageSingleApartment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageAllApartments;