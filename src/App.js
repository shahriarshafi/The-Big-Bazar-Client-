import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import ManageProduct from './components/ManageProduct/ManageProduct';
import ManageProductData from './components/ManageProductData/ManageProductData';
import CheckOut from './components/CheckOut/CheckOut';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import firebaseConfig from './components/Login/firebase.config';
import firebase from "firebase/app";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Header from './components/Header/Header';
import EditProduct from './components/EditProduct/EditProduct';


export const UserContext = createContext();
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name : '',
    email : '',
    price : '',
    productName : '',
    productQuantity : '',
    productImage : ''
  });
  console.log(loggedInUser)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/admin">

            <Admin/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/order">
            <Header/>
            <Orders/>
          </PrivateRoute>
          <Route path="/deals">
            <Header/>
            <Home/>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path="/manage">
            <ManageProductData></ManageProductData>
          </Route>
          <Route path="/editProduct">
            <EditProduct></EditProduct>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
