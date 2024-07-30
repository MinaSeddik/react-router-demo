import React, {useState} from 'react';
import {Navigate} from "react-router-dom";

function About(props) {
    const [user, setUser] = useState('Mina');

    if(!user){
        return <Navigate to="/" replace={true} />
    }


    return (
        <div className="col-9 border border-1">
            <h1>About Page</h1>

            <button className="btn btn-secondary" onClick={() => setUser(null)}>
                Logout
            </button>
        </div>
    );
}

export default About;