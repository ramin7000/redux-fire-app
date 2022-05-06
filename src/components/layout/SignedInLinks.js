import React from "react";
import {NavLink} from "react-router-dom";

export default function SignedInLinks() {
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/create">Create Project</NavLink></li>
                <li><NavLink to="/">Logout</NavLink></li>
                <li><NavLink to="/" className="btn btn-floating green darken-2">R</NavLink></li>
            </ul>
        </div>
    )
}
