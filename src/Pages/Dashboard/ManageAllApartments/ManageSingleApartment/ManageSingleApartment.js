import React from 'react';

const ManageSingleApartment = (props) => {
    const { imgUrl, title, description, _id } = props.manageAllApartment;
    console.log(props.manageAllApartment);

    const handleDeleteApartment = (id) => {
        const proceed = window.confirm('Are you sure? You want to delete this?');

        if (proceed) {
            const url = `https://polar-plains-82762.herokuapp.com/apartments/${id}`
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
    return (
        <div className="col py-3 col-sm-12 text-center">
            <div className="card">
                <img style={{ height: "300px" }} className="card-img-top" src={imgUrl} alt="the alt text here" />
                <div className="card-body">
                    <h5 className="card-title text-primary">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={() => handleDeleteApartment(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageSingleApartment;