import React from "react";
import '../../style/Portfolio.css';

export default function Image(props){
    return(
        <div>
            <img onClick={props.handleClick} className="img" src={props.src} alt={props.alt} />
        </div>
    )
}