import React from 'react';

const SingleReview = (props) => {
    // console.log(props);
    return (
        
        <div className="col-12 col-md-6 col-lg-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props?.customarReview?.user?.displayName}</h5>
            <p className="card-text">{props?.customarReview?.details}</p>
            <a href="#" className="btn btn-primary">See more...</a>
          </div>
        </div>
      </div>
        
    );
};

export default SingleReview;