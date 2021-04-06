import React from 'react';
import './OrderDetails.css'

const OrderDetails = ({order}) => {
    console.log(order)
    return (
        <>
            {/* <tbody>
                <tr>
                    <th scope="row">{}</th>
                    <td>{order.productWeight}</td>
                    <td>{}</td>
                    <td>@mdo</td>
                </tr>
            </tbody> */}
            <div className="col-md-12">
                <div className="box d-flex m-5">
                    <div>
                        <img style={{border: "1px solid transparent" , borderRadius: "10px"}} className="img-fluid w-25 p-5" src={order.productImage} alt="" srcset=""/>
                    </div>
                    <div className="p-5">
                        <h4>Name:  {order.productName}</h4>
                        <h4>Weight:  {order.productWeight}</h4>
                        <h4>Price : {order.price}</h4>
                    </div>

                </div>
            </div>


        </>
    );
};

export default OrderDetails;