import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function SignedOutLinks() {
    const logstatus = false
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/signup">Signup</NavLink></li>
                <li><NavLink to="/signin">Login</NavLink></li>
            </ul>
        </div>
    )
}