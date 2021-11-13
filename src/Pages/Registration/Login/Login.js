import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const { logInWithEmailPass, user, logInWithGoogle } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newRegisterData = { ...loginData };
        newRegisterData[field] = value;
        setLoginData(newRegisterData);
        console.log(newRegisterData);
    }

    const handleLoginSubmit = (e) => {
        logInWithEmailPass(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        logInWithGoogle(location, history);
    } 
    return (
        <div className="form-body">
            <div className="registration-form">
                <form onSubmit={handleLoginSubmit}>
                    <div className="form-icon">
                        <span><i className="icon icon-user"></i></span>
                    </div>
                    <div className="form-group">
                        <input onBlur={handleOnBlur} name="email" type="text" className="form-control item" id="email" placeholder="Type Your Email" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleOnBlur} name="password" type="password" className="form-control item" id="password" placeholder="Type Your Password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block create-account">Login</button>
                    </div>

                    {user?.email && <div className="alert alert-info" role="alert">
                    Login Success!
                  </div>}
                </form>
                <div className="social-media">
                <span>New User? <NavLink to="/register">Please Register</NavLink></span>
                    <h5 className="mt-3">Sign up with Google</h5>
                    <div className="social-icons">
                        <button onClick={handleGoogleLogin}><i className="icon-social-google" title="Google"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;