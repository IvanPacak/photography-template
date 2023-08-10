import React from "react";
import '../../style/Portfolio.css';

export default function PortfolioNavItem(props){
    return(
        <section onClick={props.handleClick} className="portfolio-btn-images">
            <img src={props.src} alt="portfolio"/>
            <div className="btn-images-overlay">
                <div className="btn-images-text">{props.name}</div>
            </div>
        </section>
    )
}