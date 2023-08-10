import React from "react";
import '../../style/Portfolio.css';

export default function ResizedImage(props){
    return(
        <div className="hidden-div" style={props.style}>
            <div id="resized-image">
                <img className="portfolio-resize" src={props.src} alt="resized" />
                <span className="portfolio-close-btn" onClick={props.handleClick}>&times;</span>
            </div>
            <div className="portfolio-background" onClick={props.handleClick}></div>
        </div>
    )
}