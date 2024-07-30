import React from 'react';
import {NavLink, useNavigate, useSearchParams} from "react-router-dom";

function Users(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';

    return (
        <div className="col-9 border border-1">
            <h1><NavLink to="/user/1">User 1</NavLink></h1>
            <h1><NavLink to="/user/2">User 2</NavLink></h1>
            <h1><NavLink to="/user/3">User 3</NavLink></h1>
            <h1><NavLink to="/user/4">User 4</NavLink></h1>
            <hr/>
            <h1><NavLink to="/user/admin">Admin User</NavLink></h1>
            <hr/>
            <button type="button" className="btn btn-secondary" onClick={() =>
                setSearchParams({filter: 'active'})}>
                Active Users Filter
            </button>

            <button type="button" className="btn btn-secondary" onClick={() =>
                setSearchParams({})}>
                Reset Filter
            </button>
            {showActiveUsers ? <h2>Display Active users only</h2> : <h2>Display All users</h2>}
        </div>
    );
}

export default Users;