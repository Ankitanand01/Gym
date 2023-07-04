import React from 'react'
import './Join.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
function Join() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4nyovk8', 'template_omr736e', form.current, 'okJHf1937qgD3G5J0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="join" id="join-us">
            <div className="left-join">
                <hr />
                <div>
                    <span className='stroke-text'>Ready to </span>
                    <span> Level up</span>
                </div>

                <div>
                    <span>Your Body </span>
                    <span className='stroke-text'> With Us ?</span>
                </div>
            </div>
            <div className="right-join">
                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type="text" placeholder='Enter your Email Address' name='user_email' />
                    <button className='btn btn-join'>    Join Now</button>
                </form>

            </div>
        </div>
    )
}

export default Join