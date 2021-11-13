import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const {createUserEmailPassword, logInWithGoogle, isLoading} = useAuth();

    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newRegisterData = {...registerData};
        newRegisterData[field] =  value;
        setRegisterData(newRegisterData);
        console.log(newRegisterData);
    }

    const handleRegisterSubmit = (e) => {
        createUserEmailPassword(registerData.email, registerData.password, registerData.name, history);

        if(registerData.password !== registerData.password2){
            alert('Password did not matched')
        }
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        logInWithGoogle(history);
    }
    return (
        <div className="form-body">
            <div className="registration-form">
                {!isLoading && <form onSubmit={handleRegisterSubmit}>
                    <div className="form-icon">
                        <span><i className="icon icon-user"></i></span>
                    </div>
                    <div className="form-group">
                        <input onBlur={handleOnBlur} name="name" type="text" className="form-control item" id="username" placeholder="Type Your Name" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleOnBlur} name="email" type="text" className="form-control item" id="email" placeholder="Type Your Email" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleOnBlur} name="password" type="password" className="form-control item" id="password" placeholder="Type Your Password" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleOnBlur} name="password2" type="password" className="form-control item" id="password" placeholder="Re-type Your Password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block create-account">Create Account</button>
                    </div>
                </form>}

                {isLoading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>}
                <div className="social-media">
                <span>Already Register? <NavLink to="/login">Please Login</NavLink></span>
                    <h5>Sign up with social media</h5>
                    <div className="social-icons">
                        <button onClick={handleGoogleLogin}><i className="icon-social-google" title="Google"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;