import React from 'react'
import { Link, BrowserRouter } from "react-router-dom";

export default function Navbar(props) {
    return (
        
        <nav>
            <div className="nav--left">
                <Link className='nav--link' to='/shop'>Shop</Link>
                <Link className='nav--link' to='/about'>About</Link>
            </div>
            <Link className='nav--link' to='/home'><h4>La Casa</h4></Link>
            <div className="nav--right">
                <Link className='nav--link' to='/cart'><i className="fa-solid fa-cart-shopping"></i>(0)</Link>
            </div>
        </nav>
        
    )
}