import React from 'react';
import {Main, Down, Corner} from '../images/footerImages'
export default function Footer() {
    return (<footer>
        <div className='footer--up'>
            <h1>Follow Us to Get More Info</h1>
            <div>
                <input type="email" placeholder="Your Email"/>
                <button>Subscribe</button>
            </div>
        </div>
        <div className='footer--down'>
            <div className='footer--down--left'>
                <h2>La Casa</h2>
                <p>Enjoy the moment!</p>
                <h5>8502 Preston Rd. Inglewood, Maine 98380</h5>
            </div>
            <div className='footer--down--right'>
                <div>
                    <h3>Chairs</h3>
                    <h3>Pillows</h3>
                    <h3>Lamps</h3>
                </div>
                <div>
                    <h3>Sofas</h3>
                    <h3>Tables</h3>
                </div>
            </div>
            <img id = 'downFooter' src={Down} alt=""/>
            <img id = 'cornerFooter' src={Corner} alt =""/>
            <img id ='mainFooter' src = {Main} alt =""/>
        </div>
        
    </footer>)
}