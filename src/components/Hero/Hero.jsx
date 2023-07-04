import React from 'react'
import './Hero.scss'
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
const Hero = () => {
    return (
        <div className="hero">
        <div className="blur hero-blur"></div>
            <div className="left-hero">
                <Header />

                <div className="the-ad">
                    <div></div>
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
                        <span>+140</span>
                        <span>expert coches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+5</span>
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
                <img className='hero-image-back' src={hero_image_back} alt="" />

                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
