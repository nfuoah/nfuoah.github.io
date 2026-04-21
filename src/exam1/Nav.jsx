import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

function Nav () {
    return (
        <nav className="navi">
            <div className="logo">
                <Link to="/">FRUITING</Link>
            </div>
            <ul className="menu">
                <li><Link to="/Spring">Spring</Link></li>
                <li><Link to="/Summer">Summer</Link></li>
                <li><Link to="/Autumn">Autumn</Link></li>
                <li><Link to="/Winter">Winter</Link></li>
                <li><Link to="/Random">Random</Link></li>
                <li><Link to="/FruitTip">?</Link></li>
            </ul>
        </nav>
    )
}

export default Nav