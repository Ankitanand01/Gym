import React from 'react'
import './Testimonials.scss';
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from "../../assets/rightArrow.png";
import { motion } from 'framer-motion'
function Testimonials() {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    const transition = { type: "spring", duration: 2 }
    return (
        <div className="testimonials" id='test'>
            <div className="left-t">
                <span className='small'>Testimonials</span>
                <span className='stroke-text what'>What they</span>
                <span className='what'>say about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 1 }}
                    className='testData'>{testimonialsData[selected].review}</motion.span>
                <span>
                    <span style={{ color: "var(--orange)" }}>{testimonialsData[selected].name}</span>
                    {" "}  -  {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="empty">
                </motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 1 }}
                    className='bannerImage' src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img src={leftArrow} alt="" onClick={() => {
                        selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);
                    }} />
                    <img src={rightArrow} alt="" onClick={() => {
                        selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Testimonials