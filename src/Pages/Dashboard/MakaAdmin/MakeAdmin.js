import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const { token } = useAuth();
    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = (e) => {
        const user = { email };
        console.log(user);

        fetch('https://polar-plains-82762.herokuapp.com/users/makeadmin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setSuccess(true);
                }
            })

        e.preventDefault();
    }
    return (
        <div className="col py-3">
            <h2 className="text-center m-5">Add an admin for manage your website.</h2>

            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={handleMakeAdmin} className="rounded">
                    <input onBlur={handleOnBlur} placeholder="Type an Email" type="email" id="" />
                    <input className="bg-info fw-bold" type="submit" value="Add Admin" />
                </form>
            </div>
            {success && 'Made an admin successfully'}
        </div>
    );
};

export default MakeAdmin;