import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const [ordersInfo, setOrdersInfo] = useState([]);
    const { user } = useAuth();

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure? You want to delete this?');

        if (proceed) {
            const url = `https://polar-plains-82762.herokuapp.com/buyapartments/myorders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                    }
                })
        }
    }
    useEffect(() => {
        const url = `https://polar-plains-82762.herokuapp.com/buyapartments/myorders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrdersInfo(data);
                console.log(data);
            })
    }, [])

    console.log(ordersInfo);
    return (
        <div className="col py-3">
            <h2 className="text-center">My Total Orders: {ordersInfo.length}</h2>

            {
                <div>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Option</th>
                            </tr>
                        </thead>
                        {
                            ordersInfo.map((orderInfo, index) => <tbody>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{orderInfo?.singleApartment?.title}</td>
                                    <td>{orderInfo?.singleApartment?.price}</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                            </tbody>)
                        }
                    </table>

                </div>
            }
        </div>
    );
};

export default MyOrders;