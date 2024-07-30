import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

function CareersLayout(props) {
    return (
        <div className="col-9 border border-1">
            <h1>Careers Layout Page</h1>
            <input type="text" className="form-control" placeholder="Search position"/>
            <br/>
            <hr/>
            {/*<nav>*/}
            {/*    <NavLink to="feature">Apply</NavLink>*/}
            {/*    <NavLink to="new">View</NavLink>*/}
            {/*</nav>*/}
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default CareersLayout;