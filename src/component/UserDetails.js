import React from 'react';
import {useParams} from "react-router-dom";

function UserDetails(props) {

    const params = useParams();

    return (
        <div className="col-9 border border-1">
            <h1> This is User's {params.userId} profile</h1>
        </div>
    );
}

export default UserDetails;