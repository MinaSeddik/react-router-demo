import React from 'react';
import {useNavigate} from "react-router-dom";

function Orders(props) {

    const navigate= useNavigate()

    return (
        <div className="col-9 border border-1">
            <h1>Welcome to Orders Page</h1>
            <button className="btn btn-primary"
                    onClick={() => navigate('/order-confirmation', {replace: true})}>Place Order</button>
        </div>
    );
}

export default Orders;