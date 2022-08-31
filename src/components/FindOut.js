import React from 'react'
import {GreenWall,Wide1,Wide2,Small1,Small2} from '../images/findOut/findOutImgs'

export default function FindOut(){

    return (<div className='findOut'>
        <div className='findOut--first'>
            <img className='findOut--Wide1' alt="" src ={Wide1}/>
            <p>Cras in dolor non urna euismod dictum a non purus. Nunc iaculis, est in tincidunt gravida, metus elit elementum erat, sit amet gravida urna eros quis sem.</p>
        </div>
        <div className='findOut--second'>
            <img className='findOut--Small1' alt="" src={Small1}/>
            <p>Nulla condimentum felis at nibh finibus, ut posuere neque scelerisque. Nullam eget ultricies magna, id porta orci. Ut dignissim maximus urna sed sollicitudin.</p>
        </div>
        <div className='findOut--third'>
            <img className='findOut--GreenWall' alt="" src ={GreenWall}/>
            <p>In cursus ante sed ultricies faucibus. Nunc augue odio, aliquet eget tellus quis, vehicula fermentum ante. Aenean et ex eu ligula mattis commodo non eu justo.</p>
        </div>
    </div>)

}