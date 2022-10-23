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
    let tables =data.products.tables.map(table=> {
        return (<div className="shop--sofa">
                {table.discount>0 && <div className="shop--sofa--discount"><h2 className="shop--seat--details--oldPrice--discount">-{table.discount}%</h2></div> }
                <i class="fa-solid fa-plus sofa--plus" ></i>
                <div className="shop--sofa--details">
                    <h1>{table.name}</h1>
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
                    <h1>{lamp.name}</h1>
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
                <h1>{lamp.name}</h1>
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
                <h1>{pillow.name}</h1>
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
        <div className="shop--products">
            {seats}
            {sofas}
            {tables}
            {lamps}
            {pillows}
        </div>
    </div>)
}