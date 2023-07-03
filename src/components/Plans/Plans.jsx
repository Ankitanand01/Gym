import React from 'react'
import './Plans.scss'
import {plansData} from '../../data/plansData';

function Plans() {
    return (
        <div className="plans-container">
            <div className="programs-header" style={{gap:"2rem"}}>
                <span className='stroke-text'>Ready to start</span>
                <span>your journey</span>
                <span className='stroke-text'>now withus</span>
            </div>
        </div>
    )
}

export default Plans