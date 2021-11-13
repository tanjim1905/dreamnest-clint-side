import React from 'react';

const AllOrders = (props) => {
    console.log(props.order);
    return (
        <tr>
            <th scope="row">{props.index + 1}</th>
            <td>{props?.order?.singleApartment?.title}</td>
            <td>{props?.order?.email}</td>
            <td>{props?.order?.number}</td>
            <td><button className="btn btn-danger">Pending</button></td>
        </tr>
    );
};

export default AllOrders;