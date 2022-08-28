import React from 'react'
import Up3 from '../images/explore/up3.png'
import Down1 from '../images/explore/down2.png'
export default function Explore(props) {
    return (
        <div className='explore'>
            <div className='explore--up'>
                <div className='explore--product'>
                    <img src={props.up.image} alt=""/>
                    <div className='explore--product--info'>
                        <p>{props.up.productName}</p>
                        <h1>${props.up.price}</h1>
                    </div>
                   
                </div>
                <div className='explore--desc'>
                    <h1>Designed to Create Great Experience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit quam leo. Pellentesque non fringilla arcu, non euismod sapien. Nulla velit tellus, maximus a fermentum sed, consequat quis arcu. Curabitur porttitor vel nisl ac faucibus. Nunc finibus accumsan nibh.</p>
                    <button className='exploreButton2'>Explore</button>
                    <img className='up3' alt="" src= {Up3}/>
                </div>
            </div>
            <div className='explore--down'>
                <div className='explore--desc'>
                        <h1>Create Magic World with Our Product</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit quam leo. Pellentesque non fringilla arcu, non euismod sapien. Nulla velit tellus, maximus a fermentum sed, consequat quis arcu. Curabitur porttitor vel nisl ac faucibus. Nunc finibus accumsan nibh.</p>
                        <button className='exploreButton2'>Explore</button>
                        <img className='down1' alt="" src= {Down1}/>
                </div>
                <div className='explore--product'>
                    <img src={props.down.image} alt=""/>
                    <div className='explore--product--info'>
                        <p>{props.down.productName}</p>
                        <h1>${props.down.price}</h1>
                    </div>
                   
                </div>
            </div>
            <div className='damnSure'>
                <h1>Design won't save the world but it damn sure makes it look good</h1>
            </div>
        </div>
    )
}