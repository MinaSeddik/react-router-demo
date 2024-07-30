import React from 'react';
import {useNavigate} from "react-router-dom";

function OrderConfirmation(props) {

    const navigate= useNavigate()

    return (
        <div className="col-9 border border-1">
            <h2>Order Confirmed !!</h2>
            <button className="btn btn-secondary"
                    onClick={() => navigate(-1)}>Go Back
            </button>
        </div>
    );
}

export default OrderConfirmation;