import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';


const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [details, setDetails] = useState({
        name: "",
        price: "",
        productName : '',
        productQuantity : '',
        productImage : ''
    });

    console.log(products)
    useEffect(() => {
        fetch('https://dry-brook-88096.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    } , [])
    const result = products.map(product => {
        if (product._id === { id }.id) {
            details.name = product.name;
            details.price = product.price;
            details.productName =product.name;
            details.productImage= product.imageURL;
            details.productQuantity = product.weight;
            loggedInUser.price = details.price;
            loggedInUser.productName = details.productName;
            loggedInUser.productQuantity =details.productQuantity;
            loggedInUser.productImage = details.productImage;
        }
    })
    console.log(loggedInUser)
    return (
        <>
        <Header/>
        <div className="container">
                <h1 class="my-5">Check Out</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{details.name}</th>
                            <td>1</td>
                            <td>{details.price}</td>
                        </tr>
                        <tr>
                            <th scope="row">Total</th>
                            <td></td>
                            <td>{details.price}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/placeorder"><p class="text-center"><button class="btn btn-danger">CheckOut</button></p></Link>
            </div>
        </>
    );
};

export default CheckOut;