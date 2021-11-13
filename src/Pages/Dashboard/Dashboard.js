import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../../PrivateRoute/AdminRoute/AdminRoute';
import AddApartment from './AddProduct/AddApartment';
import CustomarReview from './CustomarReview/CustomarReview';
import MakeAdmin from './MakaAdmin/MakeAdmin';
import ManageAllApartments from './ManageAllApartments/ManageAllApartments';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';


const Dashboard = () => {
    const { user, logOut, admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">DreamNest</span>
                            </Link>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </Link>
                                </li>
                                {admin && <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Admin Dashboard</span> </a>
                                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link to={`${path}/makeadmin`} className="nav-link px-0"> <span className="d-none d-sm-inline">Make Admin</span></Link>
                                        </li>
                                        <li className="w-100">
                                            <Link to={`${path}/manageorders`} className="nav-link px-0"> <span className="d-none d-sm-inline">Manage All Orders</span></Link>
                                        </li>
                                        <li className="w-100">
                                            <Link to={`${path}/addapartment`} className="nav-link px-0"> <span className="d-none d-sm-inline">Add Apartment</span></Link>
                                        </li>
                                        <li className="w-100">
                                            <Link to={`${path}/manageapartments`} className="nav-link px-0"> <span className="d-none d-sm-inline">Manage All Apartments</span></Link>
                                        </li>
                                    </ul>
                                </li>}
                                <li>
                                    <Link to={`${url}/myorders`} className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">My Orders</span></Link>
                                </li>

                                <li>
                                    <Link to={`${url}/payment`} className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi bi-credit-card-2-front-fill"></i> <span className="ms-1 d-none d-sm-inline">Payment</span></Link>
                                </li>

                                <li>
                                    <Link to={`${path}/customarreview`} className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customer Review</span> </Link>
                                </li>
                            </ul>
                            <hr />
                            <div className="dropdown pb-4">
                                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={user?.photoURL} alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                    <span className="d-none d-sm-inline mx-1">{user?.displayName}</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                    <li><a onClick={logOut} className="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Nested Route */}

                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/customarreview`}>
                            <CustomarReview></CustomarReview>
                        </Route>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>

                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <AdminRoute path={`${path}/manageorders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addapartment`}>
                            <AddApartment></AddApartment>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageapartments`}>
                            <ManageAllApartments></ManageAllApartments>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;