import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

function Products(props) {
    return (
        <div className="col-9 border border-1">
            <h1>Products Page</h1>
            <input type="text" className="form-control" placeholder="Search Product" />
            <br />
            <hr />
            <nav>
                <NavLink to="feature">Feature</NavLink>
                <NavLink to="new">New</NavLink>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Products;