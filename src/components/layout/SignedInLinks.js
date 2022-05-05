import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function SignedInLinks() {
    const logstatus = true
    return (
        <div>
            <ul className="right">
                <li> <NavLink to="/new-project">Create Project</NavLink></li>
                <li><NavLink to="/logstate">{(logstatus)? "Login": "Logout"}</NavLink></li>
                <li><NavLink to="/icon" className="btn btn-floating green darken-2">R</NavLink></li>
            </ul>
        </div>
    )
}