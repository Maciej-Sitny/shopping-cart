import Navbar from "./Navbar"
import {data} from '../App'
import React from 'react'
import { useLocation } from "react-router";
export default function Shop(props) {

    const [displaySeats,setDisplaySeats] = React.useState(true);
    const [displaySofas, setDisplaySofas] = React.useState(true);
    const [displayTables, setDisplayTables] = React.useState(true);
    const [displayLamps, setDisplayLamps] = React.useState(true);
    const [displayPillows, setDisplayPillows] = React.useState(true);

    const [currentProduct, setCurrentProduct] = React.useState();
    const [displayCurrentProduct, setDisplayCurrentProduct]=React.useState(false);
    let location = useLocation()
    console.log(location);
    const [productsInCart, setProductsInCart] = React.useState([]);
    const [productsInCartAndAmount, setProductsInCartAndAmount] = React.useState([]);
    function popupson(product) {
        return (
        
                
                <div className="popup" >
                    
                    <img alt="" src= {product.imgSource}/>
                    <div className="popup--right">
                        <i class="fa-solid fa-xmark popup--right--plus" onClick={()=>{setDisplayCurrentProduct(false)}} ></i>
                        <h1>{product.name}</h1>    
                        <p>{product.description}</p>
                        {product.discount ? <div>
                            <h3>${product.officialPrice}</h3>
                            <h1>${product.officialPrice-product.officialPrice*product.discount/100}</h1>                        
                        </div> :  <h2>${product.officialPrice}</h2>}
                        <button>Add to cart</button>
                    </div> 
                </div>
            
        )
    }

    let filtr = (
        <div className="filtr">
            <div>
             <input type="checkbox" onClick={()=>{setDisplaySeats(prev=>{console.log(prev);return !prev; })}} checked={displaySeats} id="seats" name="seats" value="seats"/>
             <label for="seats">Seats</label><br></br>
             </div>
             <div>
             <input type="checkbox" onClick={()=>{setDisplaySofas(prev=>{console.log(prev);return !prev; })}} checked={displaySofas} id="sofas" name="sofas" value="sofas"/>
             <label for="sofas">Sofas</label><br></br>
             </div>
             <div>
             <input type="checkbox" onClick={()=>{setDisplayTables(prev=>{console.log(prev);return !prev; })}} checked={displayTables} id="tables" name="tables" value="tables"/>
             <label for="Tables">Tables</label><br></br>
             </div>
             <div>
             <input type="checkbox" onClick={()=>{setDisplayLamps(prev=>{console.log(prev);return !prev; })}} checked={displayLamps} id="lamps" name="lamps" value="lamps"/>
             <label for="Lamps">Lamps</label><br></br>
             </div>
             <div>
             <input type="checkbox" onClick={()=>{setDisplayPillows(prev=>{console.log(prev);return !prev; })}} checked={displayPillows} id="pillows" name="pillows" value="pillows"/>
             <label for="pillows">Pillows</label><br></br>
             </div>
        </div>
    )
    function isProductInCart(id){
        if (productsInCart.includes(id)){
            return true
        }
        else {
            return false
        }
    }
    let seats = data.products.seats.map(seat=>{
        return <div  className="shop--seat">
            {seat.discount>0 && <div className="shop--seat--discount"><h2 className="shop--seat--details--oldPrice--discount">-{seat.discount}%</h2></div> }
            <i onClick={()=>{
                        if (isProductInCart(seat.id)){
                            
                            let dupa=productsInCartAndAmount
                            console.log(dupa)
                                    for (let array in dupa){
                                        console.log(array[0]===seat.id)
                                        if (array[0]===seat.id){
                                            
                                            array[1]=array[1]+1
                                        }
                                    }
                            setProductsInCartAndAmount(dupa)
                        }
                        else {
                            setProductsInCartAndAmount([...productsInCartAndAmount,[seat.id,1]])
                            setProductsInCart([...productsInCart,seat.id])
                        }
                        console.log(productsInCart)
                    console.log(productsInCartAndAmount)
                    }
                    
                } 
            class="fa-solid fa-plus" ></i>
            <img src = {seat.imgSource} alt=''/>
            <div className="shop--seat--details">
                <h1 onClick={()=>{setCurrentProduct(seat);setDisplayCurrentProduct(true)}} >{seat.name}</h1>
                {seat.discount ? 
                <div>
                    <h2 className="shop--seat--details--oldPrice">
                        <span className="shop--seat--details--oldPrice--textDecoration">${seat.officialPrice}</span> 
                    </h2>
                    <h1 className="shop--seat--details--newPrice">${seat.officialPrice-seat.officialPrice*seat.discount/100}</h1>
                </div> 
                : 
                <h1 className="shop--seat--details--officialPrice">${seat.officialPrice}</h1>
                }
            </div>
        </div>
    })

    let sofas =data.products.sofas.map(sofa => {
        return (<div className="shop--sofa">
                {sofa.discount>0 && <div className="shop--sofa--discount"><h2 className="shop--seat--details--oldPrice--discount">-{sofa.discount}%</h2></div> }
                <i class="fa-solid fa-plus sofa--plus" ></i>
                <div className="shop--sofa--details">
                    <h1 onClick={()=>{setCurrentProduct(sofa);setDisplayCurrentProduct(true)}}>{sofa.name}</h1>
                    {sofa.discount ? 
                        <div>
                            <h2 className="shop--seat--details--oldPrice">
                                <span className="shop--seat--details--oldPrice--textDecoration">${sofa.officialPrice}</span> 
                            </h2>
                            <h2 className="shop--seat--details--newPrice shop--sofa--details--newPrice">${sofa.officialPrice-sofa.officialPrice*sofa.discount/100}</h2>
                        </div> 
                        : 
                        <h2 className="shop--seat--details--officialPrice shop--sofa--details--officialPrice">${sofa.officialPrice}</h2>
                        }
                        </div>
                <img src={sofa.imgSource} alt=""/>
            </div>)
    })
    let tables =data.products.tables.map(table=> {
        return (<div className="shop--sofa">
                {table.discount>0 && <div className="shop--sofa--discount"><h2 className="shop--seat--details--oldPrice--discount">-{table.discount}%</h2></div> }
                <i class="fa-solid fa-plus sofa--plus" ></i>
                <div className="shop--sofa--details">
                    <h1 onClick={()=>{setCurrentProduct(table);setDisplayCurrentProduct(true)}}>{table.name}</h1>
                    {table.discount ? 
                        <div>
                            <h2 className="shop--seat--details--oldPrice">
                                <span className="shop--seat--details--oldPrice--textDecoration">${table.officialPrice}</span> 
                            </h2>
                            <h2 className="shop--seat--details--newPrice shop--sofa--details--newPrice">${table.officialPrice-table.officialPrice*table.discount/100}</h2>
                        </div> 
                        : 
                        <h2 className="shop--seat--details--officialPrice shop--sofa--details--officialPrice">${table.officialPrice}</h2>
                        }
                        </div>
                <img src={table.imgSource} alt=""/>
            </div>)
    })
    let lamps =data.products.lamps.map(lamp=> {
        if (lamp.background) { 
            return (<div className="shop--sofa">
                
                
                
                
                {lamp.discount>0 && <div className="shop--sofa--discount"><h2 className="shop--seat--details--oldPrice--discount">-{lamp.discount}%</h2></div> }
                <i class="fa-solid fa-plus sofa--plus" ></i>
                <div className="shop--sofa--details">
                    <h1 onClick={()=>{setCurrentProduct(lamp);setDisplayCurrentProduct(true)}}>{lamp.name}</h1>
                    {lamp.discount ? 
                        <div>
                            <h2 className="shop--seat--details--oldPrice">
                                <span className="shop--seat--details--oldPrice--textDecoration">${lamp.officialPrice}</span> 
                            </h2>
                            <h2 className="shop--seat--details--newPrice shop--sofa--details--newPrice">${lamp.officialPrice-lamp.officialPrice*lamp.discount/100}</h2>
                        </div> 
                        : 
                        <h2 className="shop--seat--details--officialPrice shop--sofa--details--officialPrice">${lamp.officialPrice}</h2>
                        }
                        </div>
                <img src={lamp.imgSource} alt=""/>
                
                 
            </div>)

        }
        else {
            return <div className="shop--seat">
            {lamp.discount>0 && <div className="shop--seat--discount"><h2 className="shop--seat--details--oldPrice--discount">-{lamp.discount}%</h2></div> }
            <i class="fa-solid fa-plus"></i>
            <img src = {lamp.imgSource} alt=''/>
            <div className="shop--seat--details">
                <h1 onClick={()=>{setCurrentProduct(lamp);setDisplayCurrentProduct(true)}}>{lamp.name}</h1>
                {lamp.discount ? 
                <div>
                    <h2 className="shop--seat--details--oldPrice">
                        <span className="shop--seat--details--oldPrice--textDecoration">${lamp.officialPrice}</span> 
                    </h2>
                    <h1 className="shop--seat--details--newPrice">${lamp.officialPrice-lamp.officialPrice*lamp.discount/100}</h1>
                </div> 
                : 
                <h1 className="shop--seat--details--officialPrice">${lamp.officialPrice}</h1>
                }
            </div>
        </div>
        }
        
    })

    let pillows = data.products.pillows.map(pillow=>{
        return (<div className="shop--seat">
            {pillow.discount>0 && <div className="shop--seat--discount"><h2 className="shop--seat--details--oldPrice--discount">-{pillow.discount}%</h2></div> }
            <i class="fa-solid fa-plus"></i>
            <img src = {pillow.imgSource} alt=''/>
            <div className="shop--seat--details">
                <h1 onClick={()=>{setCurrentProduct(pillow);setDisplayCurrentProduct(true)}}>{pillow.name}</h1>
                {pillow.discount ? 
                <div>
                    <h2 className="shop--seat--details--oldPrice">
                        <span className="shop--seat--details--oldPrice--textDecoration">${pillow.officialPrice}</span> 
                    </h2>
                    <h1 className="shop--seat--details--newPrice">${pillow.officialPrice-pillow.officialPrice*pillow.discount/100}</h1>
                </div> 
                : 
                <h1 className="shop--seat--details--officialPrice">${pillow.officialPrice}</h1>
                }
            </div>
        </div>)
            
    })

    return (<div className="shop">
        <Navbar />
        {filtr}
        {displayCurrentProduct && popupson(currentProduct)}
        {displayCurrentProduct && <div className="grayson" onClick={()=>{setDisplayCurrentProduct(false)}}></div>}
        <div className="shop--products">
            
            {displaySeats && seats}
            {displaySofas && sofas}
            {displayTables && tables}
            {displayLamps && lamps}
            {displayPillows && pillows}
        </div>
    </div>)
}