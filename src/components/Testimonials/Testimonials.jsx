import React from 'react'
import './Testimonials.scss';
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from "../../assets/rightArrow.png";
function Testimonials() {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className="testimonials">
            <div className="left-t">
                <span className='small'>Testimonials</span>
                <span className='stroke-text what'>What they</span>
                <span className='what'>say about us</span>
                <span className='testData'>{testimonialsData[selected].review}</span>
                <span>
                    <span style={{ color: "var(--orange)" }}>{testimonialsData[selected].name}</span>
                    {" "}  -  {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div className="empty"></div>
                <img className='bannerImage' src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img src={leftArrow} alt="" onClick={()=>{
                        selected === 0 ? setSelected(tLength -1) : setSelected((prev) => prev -1);
                    }}/>
                    <img src={rightArrow} alt="" onClick={()=>{
                        selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials