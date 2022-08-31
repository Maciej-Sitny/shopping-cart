import React from 'react';

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
                    <h3>Chair</h3>
                    <h3>Pillow</h3>
                    <h3>Lamp</h3>
                </div>
                <div>
                    <h3>Sofa</h3>
                    <h3>Table</h3>
                </div>
            </div>
        </div>
    </footer>)
}