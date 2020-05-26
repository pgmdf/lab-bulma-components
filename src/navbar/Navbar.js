import React from "react";

// npm i bootstrap required
import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css";

function Navbar() {
    return (
        <div>
            <nav>
                <div className="row">
                    <img className="col-2" src="https://bulma.io/images/bulma-logo.png" />
                    <div className="col-2">
                        <a href="/">Home</a></div>
                    <div className="col-4"></div>
                    <div className="col-2"><a href="/login">Login</a></div>
                    <div className="col-2"><a href="/signup">Signup</a></div>
                </div>
            </nav>
        </div>);
}

export default Navbar;