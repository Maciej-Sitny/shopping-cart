import React from 'react'
import { Link, BrowserRouter } from "react-router-dom";
import starAndCircle from '../images/starAndCircle-removebg-preview.png'
import Cart from "./Cart"
export default function Navbar(props) {
    let [cartVisible, setCartVisible] = React.useState(false);
    return (
        <nav>
            <div className="nav--left">
                <Link className='nav--link' to={{pathname: "/shop",}} state={{a:"b"}}>
                Shop</Link>
                <Link className='nav--link' to='/about'>About</Link>
            </div>
            <Link className='nav--link' to='/'><div className="lacasa"> <h4>La Casa</h4><img className='hero--title--starAndCircle' src={starAndCircle} alt="" /></div></Link>
            <div className="nav--right">
                <i className="fa-solid fa-cart-shopping" onClick={()=>{setCartVisible(prev=>!prev)}}></i>(0)
                {cartVisible && <Cart/>}
            </div>
        </nav>
        
    )
}