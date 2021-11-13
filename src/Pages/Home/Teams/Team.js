import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <div>
            <div className="team-boxed">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Team </h2>
                        <p className="text-center">We have an excellent team. Our team is handle  professionally very well. When you add a team owner, they are also added as a member, except when the team is created in the Teams admin center or when a team is added to a new or existing our group.</p>
                    </div>
                    <div className="row people">
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"><img className="rounded-circle" src="https://i.ibb.co/4sVVtJb/team1.jpg" />
                                <h3 className="name">Ben Johnson</h3>
                                <p className="title">CEO</p>
                                <p className="description">He is the CEO of our company. He is handle very well his job.</p>
                                <div className="social"><a href="#"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"><img className="rounded-circle" src="https://i.ibb.co/y00wnCX/team2.jpg" />
                                <h3 className="name">Emily Clark</h3>
                                <p className="title">Managing Director</p>
                                <p className="description">He is the MD of our company. He is handle very well his job.</p>
                                <div className="social"><a href="#"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"><img className="rounded-circle" src="https://i.ibb.co/dLST2kg/team3.jpg" />
                                <h3 className="name">Carl Kent</h3>
                                <p className="title">Marketting Head</p>
                                <p className="description">He is the MH of our company. He is handle very well his job.</p>
                                <div className="social"><a href="#"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;