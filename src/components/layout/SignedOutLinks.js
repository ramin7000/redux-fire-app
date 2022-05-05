import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function SignedOutLinks() {
    const logstatus = false
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/new-project">Signup</NavLink></li>
                <li><NavLink to="/logstate">{(logstatus)? "Login": "Logout"}</NavLink></li>
            </ul>
        </div>
    )
}