import Navbar from "./Navbar"
import {data} from '../App'
export default function Shop() {
    let seats = data.products.seats.map(seat=>{
        return <div className="shop--seat">
            {seat.discount>0 && <div className="shop--seat--discount"><h2 className="shop--seat--details--oldPrice--discount">-{seat.discount}%</h2></div> }
            <img src = {seat.imgSource} alt=''/>
            <div className="shop--seat--details">
                <h1>{seat.name}</h1>
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

    return (<div className="shop">
        <Navbar />
        <div className="shop--products">
            {seats}
        </div>
    </div>)
}