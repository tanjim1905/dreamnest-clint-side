import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Navbar.css';

const NavBar = () => {
    const { user, logOut } = useAuth();
    // const name = user.displayName;
    // const userName = name.split(' ')[0];
    // console.log(user);
    return (
        <>
            <nav className="navbar sticky-top bg-light navbar-expand-lg navbar-light py-3">
                <div className="container px-5">
                    <div className="logo">
                        <NavLink className="navbar-brand" to="/home"><span className="">Dream</span><span className="text-info">Nest</span></NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/apartments">Apartments</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            {user.email && <li className="nav-item">
                                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                            </li>}
                        </ul>
                        <div className="register-part">
                            {
                                user.email ? <button onClick={logOut}>Logout</button> :
                                <NavLink to="/login"><button>Login</button></NavLink>
                            }

                                
                            {(user.email) && (<span className="ms-2 bg-dark text-white fw-bold p-2 rounded">{user?.displayName}</span>)}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;