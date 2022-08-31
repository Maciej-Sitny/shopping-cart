import React from 'react'
import {GreenWall,Wide1,Wide2,Small1,Small2} from '../images/findOut/findOutImgs'

export default function FindOut(){
    const [firstHover, setFirstHover] = React.useState(false)
    const [secondHover, setSecondHover] = React.useState(false)
    const [thirdHover, setThirdHover] = React.useState(false)


    return (<div className='findOut'>
        <div className='findOut--first'>
            <div onMouseEnter={()=>{setFirstHover(true)}} onMouseLeave={()=>{setFirstHover(false)}} className='findOut--Wide1--container'>
                {firstHover && <h2  >Find out</h2>}
                <img   className='findOut--Wide1' alt="" src ={Wide1}/>
                
            </div>
            <p>Cras in dolor non urna euismod dictum a non purus. Nunc iaculis, est in tincidunt gravida, metus elit elementum erat, sit amet gravida urna eros quis sem.</p>
            
        </div>
        <div className='findOut--second'>
            <div onMouseEnter={()=>{setSecondHover(true)}} onMouseLeave={()=>{setSecondHover(false)}} className='findOut--Small1--container'>
                {secondHover && <h2>Find out</h2>}
                <img className='findOut--Small1' alt="" src={Small1}/>
            </div>
            <p>Nulla condimentum felis at nibh finibus, ut posuere neque scelerisque. Nullam eget ultricies magna, id porta orci. Ut dignissim maximus urna sed sollicitudin.</p>
            
        </div>
        <div className='findOut--third'>
            <div onMouseEnter={()=>{setThirdHover(true)}} onMouseLeave={()=>{setThirdHover(false)}} className='findOut--GreenWall--container'>
                {thirdHover && <h2>Find out</h2>}
                <img className='findOut--GreenWall' alt="" src ={GreenWall}/>
            </div>
            <p>In cursus ante sed ultricies faucibus. Nunc augue odio, aliquet eget tellus quis, vehicula fermentum ante. Aenean et ex eu ligula mattis commodo non eu justo.</p>
            
        </div>
    </div>)

}