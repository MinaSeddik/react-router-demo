import React from 'react';
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

function RootLayout(props) {
    return (
        <div>
            <NavBar/>

            <Breadcrumbs />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <SideBar/>
                    </div>

                    <Outlet/>

                </div>
            </div>
            <Footer/>

        </div>
    );
}

export default RootLayout;