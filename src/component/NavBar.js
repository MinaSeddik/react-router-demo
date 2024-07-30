import React from 'react';
import {Link, NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/xusers">X-Users</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/admin" style={{color: "red", fontWeight: "bold"}}>Admin (Lazy loading module)</NavLink>
        </nav>
    );
}

export default NavBar;