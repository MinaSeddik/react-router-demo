import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

function XUsers(props) {
    return (
        <>
            <div className="col-9 border border-1">
                <h1><NavLink to="/xusers/1">X-User 1</NavLink></h1>
                <h1><NavLink to="/xusers/2">X-User 2</NavLink></h1>
                <h1><NavLink to="/xusers/3">X-User 3</NavLink></h1>
                <h1><NavLink to="/xusers/4">X-User 4</NavLink></h1>
                <Outlet/>
            </div>

        </>
    );
}

export default XUsers;