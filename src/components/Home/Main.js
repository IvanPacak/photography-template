import React, {useState, useRef, useEffect} from "react";
import '../../style/Main.css';

import mainFamily from '../../Photos/Family/family_1.jpg';
import mainPortrait from '../../Photos/Portrait/portrait_2.jpg';
import mainNewborn from '../../Photos/Newborn/newborn_1.jpg';
import mainBoudoir from '../../Photos/Boudoir/boudoir_2.jpg';
import mainWedding from '../../Photos/Wedding/wedding_1.jpg';

export default function Main(){

    const images = [
      mainFamily,
      mainPortrait,
      mainNewborn,
      mainBoudoir,
      mainWedding
    ];

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(() =>
          setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1),
        4000
      );

      return () => {
        resetTimeout();
      };
    }, [index, images.length]);

    const img = images.map((backgroundImage, key) => <div key={key + 1} style={{backgroundImage: `url(${backgroundImage})`}} className="slider-item"></div>);

    console.log(img);
    return(
        <div className="slider">
          <div style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} className="slideshow">
          {img}
          </div>
        </div>
    )
}