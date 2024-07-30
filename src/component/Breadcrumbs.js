import React from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";

function Breadcrumbs(props) {

    const location = useLocation()
    // console.log(location)

    let currentLink = ''

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink+= `/${crumb}`

            return (
                <li className="breadcrumb-item" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </li>
            )
        })

    return (
        <>

            <nav aria-label="breadcrumb" className="myBreadCrumb">

                <div className="">
                    Breadcrumb example
                </div>
                <ol className="breadcrumb">
                    {crumbs}
                </ol>

            </nav>


        </>
    );
}

export default Breadcrumbs;