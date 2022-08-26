export default function Seat(props){

    return (
        <div className='infoGallerySeat'><div className = "gallerySeat">
        <img alt="" src={props.image}/>
        </div>
            <h3>{props.seatName}</h3>
            <p className="seatPrice">${props.officialPrice}</p>
            <p className="seatDetails">See Details</p>
        </div>
    )
}