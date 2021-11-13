import React, { useEffect, useState } from 'react';
import AllOrders from './AllOrders/AllOrders';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://dreamnest-de855.web.app/buyapartments')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
                console.log(data);
            });
    }, [])
    console.log(allOrders);
    return (
        <div>
            <h2 className="text-center my-5">Available Orders: {allOrders.length}</h2>

            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                {
                    allOrders.map((order, index) => <tbody>
                        <AllOrders
                            key={order._id}
                            index={index}
                            order={order}
                        ></AllOrders>
                    </tbody>)
                }
            </table>

            {

            }
        </div>
    );
};

export default ManageAllOrders;