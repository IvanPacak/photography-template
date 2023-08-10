import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../../style/Header.css';

export default function Header(){
    return(
        <>
            <nav id="header-nav">
                <div className="header-logo"></div>
                <div className="header-title">
                    <h3>Lucia Pacak Photography</h3>
                </div>
                <div id="header-menu">
                    <li className="header-list-item">
                        <Link to="/">Domov</Link>
                    </li>
                    <li className="header-list-item">
                        <Link to="/portfolio">Portfólio</Link>
                    </li>
                    <li className="header-list-item">
                        <Link to="/contact">Kontakt</Link>
                    </li>
                </div>
            </nav>
            <Outlet/>
      </>
    )
}