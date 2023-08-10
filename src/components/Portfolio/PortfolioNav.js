import React from "react";
import '../../style/Portfolio.css';
import PortfolioNavItem from "./PortfolioNavItem";

export default function PortfolioNav(props){
    const portfolioNavItem = props.navImages.map(item => <PortfolioNavItem key={item[0].id} handleClick={() => props.handleClick(item[0].id)} name={item[0].alt} src={item[0].image} />)
    return(
        <nav id="portfolio-nav">
            {portfolioNavItem}
        </nav>
    )
}