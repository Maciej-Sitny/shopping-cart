import Navbar from "./Navbar"
import {data} from '../App'
export default function Shop() {
    let seats = data.products.seats.map(seat=>{
        return <div className="shop--seat">
            {seat.discount>0 && <div className="shop--seat--discount"><h2 className="shop--seat--details--oldPrice--discount">-{seat.discount}%</h2></div> }
            <i class="fa-solid fa-plus"></i>
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

    let sofas =data.products.sofas.map(sofa => {
        return (<div className="shop--sofa">
                {sofa.discount>0 && <div className="shop--sofa--discount"><h2 className="shop--seat--details--oldPrice--discount">-{sofa.discount}%</h2></div> }
                <i class="fa-solid fa-plus sofa--plus" ></i>
                <div className="shop--sofa--details">
                    <h1>{sofa.name}</h1>
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

    return (<div className="shop">
        <Navbar />
        <div className="shop--products">
            {seats}
            {sofas}
        </div>
    </div>)
}