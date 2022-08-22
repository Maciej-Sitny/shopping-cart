import React from 'react';

import heroImage from '../images/hero-image.jpg'
export default function Hero() {
    return <div className="hero">
        <div className='hero--title'>
            <h1>MAKE YOUR HOME LIKE IN HEAVEN</h1>
            {/* <img className='hero--title--starAndCircle' src={starAndCircle} alt="" /> */}
            <img className='heroImage' src={heroImage} alt=""/>
            <div className='hero--explore'>
                <p>Make your home feel like in heaven.</p>
                <button>Explore</button>
            </div>
        </div>
    </div>
}