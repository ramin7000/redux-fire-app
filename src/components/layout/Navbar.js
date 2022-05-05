import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

export default function Navbar() {
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="amber-text left" >ReduxFire</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        </div>
    )
}