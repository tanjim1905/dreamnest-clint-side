import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Apartments from './Pages/Apartments/Apartments';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import BuyApartment from './Pages/Home/BuyApartment/BuyApartment';
import Home from './Pages/Home/Home';
import Footer from './Pages/Home/Shared/Footer/Footer';
import NavBar from './Pages/Home/Shared/NavBar/NavBar';
import Notfound from './Pages/Notfound/Notfound';
import Login from './Pages/Registration/Login/Login';
import Register from './Pages/Registration/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
        <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/apartments">
              <Apartments></Apartments>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/buyapartment/:apartmentId">
              <BuyApartment></BuyApartment>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
