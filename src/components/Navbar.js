import React from 'react'
import { Link, BrowserRouter } from "react-router-dom";
import starAndCircle from '../images/starAndCircle-removebg-preview.png'
export default function Navbar(props) {
    return (
        
        <nav>
            <div className="nav--left">
                <Link className='nav--link' to='/shop'>Shop</Link>
                <Link className='nav--link' to='/about'>About</Link>
            </div>
            <Link className='nav--link' to='/'><div className="lacasa"> <h4>La Casa</h4><img className='hero--title--starAndCircle' src={starAndCircle} alt="" /></div></Link>
            <div className="nav--right">
                <Link className='nav--link' to='/cart'><i className="fa-solid fa-cart-shopping"></i>(0)</Link>
            </div>
        </nav>
        
    )
}