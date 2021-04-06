import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './Order.css'
import Header from '../Header/Header';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    console.log(loggedInUser)
    useEffect(() => {
        fetch('https://dry-brook-88096.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h1><h1>Hi <span style={{ color: "green" }}>{loggedInUser.name}</span> You Have Ordered: </h1></h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        orders.map(order => <OrderDetails order={order}></OrderDetails>)
                    }
                </div>
            </div>
        </>
    );
};

export default Orders;