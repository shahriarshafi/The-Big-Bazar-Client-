import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import spinner from '../../spinner.gif';

const Home = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    })

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    {
                        products.length === 0 && <img src={spinner} className="img-fluid w-75 m-auto"/>
                    }
                    {
                        products.map(product => <Products product={product}></Products>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;