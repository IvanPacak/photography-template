import React, {useState} from "react";
import '../../style/Portfolio.css';

import PortfolioImages from "../Portfolio/PortfolioImages";
import PortfolioNav from "../Portfolio/PortfolioNav";
import ResizedImage from "../Portfolio/ResizedImage";

import portfolioFamily from '../../Photos/Family/family_1.jpg';
import portfolioPortrait from '../../Photos/Portrait/portrait_1.jpg';
import portfolioNewborn from '../../Photos/Newborn/newborn_1.jpg';
import portfolioBoudoir from '../../Photos/Boudoir/boudoir_1.jpg';
import portfolioWedding from '../../Photos/Wedding/wedding_1.jpg';

export default function Portfolio() {

    const navImages = [
        [
            {
                image: portfolioFamily,
                alt: 'Families',
                id: 1
            }
        ],
        [
            {
                image: portfolioPortrait,
                alt: 'Portraits',
                id: 2
            }
        ],
        [
            {
                image: portfolioNewborn,
                alt: 'Newborns',
                id: 3
            }
        ],
        [
            {
                image: portfolioBoudoir,
                alt: 'Boudoirs',
                id: 4
            }
        ],
        [
            {
                image: portfolioWedding,
                alt: 'Weddings',
                id: 5
            }
        ]
    ]

    const [index, setIndex] = useState(0);
    const changeGallery = (e) => {
        setIndex(e - 1);
    }

    const [resizedSRC, setResizedSRC] = useState("");
    const [hidden, setHidden] = useState(true);
    const fullScreenImage = (e) => {
        setResizedSRC(e.target.src);
        setHidden(prevHidden => !prevHidden);
    }

    const closeImage = () => {
        setHidden(true);
    }

    return(
        <div>
            <PortfolioNav navImages={navImages} handleClick={changeGallery}/>
            <PortfolioImages index={index} handleClick={fullScreenImage}/>
            <ResizedImage handleClick={closeImage} style={{display: hidden ? 'none' : 'block'}} src={resizedSRC} />
        </div>
    )
}