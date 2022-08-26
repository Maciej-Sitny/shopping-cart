import {MasterG,ComfyG,SquaroG,EnigmaG,UpheadG,SimplexG} from '../images/seats/gallery/gallery'


export default function Seat(props){

    let images = [MasterG,ComfyG,EnigmaG,UpheadG,SquaroG,SimplexG]

    return (
        <div className={props.cName}><div className = "gallerySeat">
        <img alt="" src={props.image}/>
        </div>
            <h3>{props.seatName}</h3>
            <p className="seatPrice">${props.officialPrice}</p>
            <p className="seatDetails">See Details</p>
        </div>
    )
}