import { Link } from 'react-router-dom';
import React from 'react';

const Products = ({ product }) => {

    return (
        <div className="col-md-4 p-3">
            <div class="card text-center">
                <img src={product.imageURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <div class="d-flex justify-content-between p-5">
                        <p class="card-text">{product.price} Tk.</p>
                        <Link to={`/checkout/${{product}.product._id}`} class="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;