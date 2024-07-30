import React from 'react';
import {useRouteError} from "react-router-dom";

function CareerError(props) {
    const error  =useRouteError()

    return (
        <div>
            <p>{error.message}</p>
        </div>
    );
}

export default CareerError;