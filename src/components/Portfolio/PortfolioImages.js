import React from "react";
import '../../style/Portfolio.css';
import Image from "./Image";

import firstFamily from '../../Photos/Family/family_1.jpg';
import secondFamily from '../../Photos/Family/family_2.jpg';
import firstPortrait from '../../Photos/Portrait/portrait_1.jpg';
import secondPortrait from '../../Photos/Portrait/portrait_2.jpg';
import firstNewborn from '../../Photos/Newborn/newborn_1.jpg';
import secondNewborn from '../../Photos/Newborn/newborn_2.jpg';
import firstBoudoir from '../../Photos/Boudoir/boudoir_1.jpg';
import secondBoudoir from '../../Photos/Boudoir/boudoir_2.jpg';
import firstWedding from '../../Photos/Wedding/wedding_1.jpg';
import secondWedding from '../../Photos/Wedding/wedding_2.jpg';

export default function PortfolioImages(props){

    const sectionImages = [
        [
            {
                images: [firstFamily, secondFamily, firstFamily, secondFamily, firstFamily, secondFamily],
                alts: 'family'
            }
        ],
        [
            {
                images: [firstPortrait, secondPortrait, firstPortrait, secondPortrait, firstPortrait, secondPortrait],
                alts: 'portrait'
            }
        ],
        [
            {
                images: [firstNewborn, secondNewborn, firstNewborn, secondNewborn, firstNewborn, secondNewborn],
                alts: 'newborn'
            }
        ],
        [
            {
                images: [firstBoudoir, secondBoudoir, firstBoudoir, secondBoudoir, firstBoudoir, secondBoudoir],
                alts: 'boudoir'
            }
        ],
        [
            {
                images: [firstWedding, secondWedding, firstWedding, secondWedding, firstWedding, secondWedding],
                alts: 'wedding'
            }
        ]
    ]

    const images = sectionImages[props.index].map(section => section.images.map(item => <Image handleClick={props.handleClick} src={item} alt={sectionImages[props.index].alts}/>))

    return(
        <div id="photos-section" className="portfolio-image-frame">
            {images}
        </div>
    )
}