import React from 'react'
import './Hero.scss'
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import Ncount from 'number-counter';
const Hero = () => {
    const transitionEff = { type: "spring", duration: 2 }
    const mobile =window.innerWidth<=768 ? true :false;
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-hero">
                <Header />

                <div className="the-ad">
                    <motion.div initial={{ left: mobile? "145px": '325px' }} whileInView={{ left: '8px' }} transition={{ ...transitionEff, type: 'tween' }}></motion.div>
                    <span>Lorem ipsum dolor sit amet consectetur.</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>

                    <div className='lorem'>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem placeat, non cupiditate officia iste!</span>
                    </div>
                </div>

                <div className="images">
                    <div>
                        <span><Ncount end={140} start={80} delay='3' preFix="+"></Ncount></span>
                        <span>expert coches</span>
                    </div>
                    <div>
                        <span><Ncount end={978} start={700} delay='3' preFix="+"></Ncount></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><Ncount end={40} start={20} delay='3' preFix="+"></Ncount></span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-hero">
                <button className='btn'>Join Now</button>
                <div className="heart-rate">
                    <img src={Heart} alt=" no img " />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                <img className='hero-image' src={hero_image} alt="" />
                <motion.img
                    initial={{ right: '11rem' }} whileInView={{ right: '20rem' }} transition={{ ...transitionEff, type: 'tween' }}
                    className='hero-image-back' src={hero_image_back} alt="" />

                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    // transition={{transitionEff}}
                    transition={{ ...transitionEff, type: 'tween' }}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
