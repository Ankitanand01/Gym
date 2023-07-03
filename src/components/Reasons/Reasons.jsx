import React from 'react'
import './Reasons.scss';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
function Reasons() {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-region">
                <img src={image1} alt="no" />
                <img src={image2} alt="no" />
                <img src={image3} alt="no" />
                <img src={image4} alt="no" />
            </div>
            <div className="right-region">
                <span className='reasons'>some reasons</span>

                <div className='why'>
                    <span className='stroke-text'>why</span>
                    <span> choose us?</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={tick} alt="" />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick}  alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>

                <span style={{color:"var(--gray)", fontWeight:"normal"}}>Our Partners</span>
                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons