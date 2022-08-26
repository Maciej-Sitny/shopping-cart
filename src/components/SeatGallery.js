import {MasterG,ComfyG,SquaroG,EnigmaG,UpheadG,SimplexG} from '../images/seats/gallery/gallery'
import Seat from './Seat';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import "../../node_modules/slick-carousel/slick/slick.css"; 
// import "../../node_modules/slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import rightArrow from "../images/swiper/MyprojectrightArrow.png"
import leftArrow from "../images/swiper/MyprojectleftArrow.png"

export default function SeatGallery(props) {
    let images = [MasterG,ComfyG,EnigmaG,UpheadG,SquaroG,SimplexG]
    let seatsDiv=[];
    const [clicked, setClicked] = React.useState(false);
    for (let i=0;i<images.length;i++){
            seatsDiv.push(      
                <Seat  cName={'infoGallerySeat'} image={images[i]} seatName={props.data.products.seats[i].name} officialPrice={props.data.products.seats[i].officialPrice} />
            )
    }
    
    const prevRef = React.useRef(null);
    const nextRef = React.useRef(null);

    return (
        <div className="seatGallery">
            <div className='eloLeft' ref={prevRef}><i className="fa-solid fa-arrow-left-long fa-3x arrowLeft"></i></div>
            <Swiper className='seatsSwiper' spaceBetween={0} slidesPerView={3} centeredSlides={true} loop={true} pagination={{clickable: true}}  modules={[Pagination,Navigation]}
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >

                    {seatsDiv.map(image=><SwiperSlide>{image}</SwiperSlide>)}
                    
                    
            </Swiper>
            <div className='eloRight' ref={nextRef}><i onClick={()=>{setClicked(true);setClicked(false)}} className={`fa-solid fa-arrow-right-long fa-3x arrowRight`}></i></div>
        </div>
    )

    


   
}