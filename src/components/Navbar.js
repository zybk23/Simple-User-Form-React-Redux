import React, {Component} from 'react';
import {Link} from "react-router-dom"


class Navbar extends Component {
    render() {
        const{title}=this.props
        return (
            <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
                <a href="/" className="navbar-brand">{title}</a>
                <ul className={"navbar-nav ml-auto"}>
                    <li className="nav-item active">
                        <Link to={"/"} className={"nav-link"}>Home</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={"/add"} className={"nav-link"}>Add User</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={"/github"} className={"nav-link"}>Project Files</Link>
                    </li>

                </ul>
            </nav>
        );
    }
}

export default Navbar;