import Footer from "./Footer";
import LazyLoad from 'react-lazy-load';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

 
export default function Contact(){
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(false)
    const [sent, setSent] = useState(false)

    function sendEmail(e){
        e.preventDefault()
        setIsLoading(true)
      
        emailjs.sendForm('service_isp5ssh', 'template_ja3zp2r', form.current, '6owj14iPnVZ6l9AGH')
          .then(result => {
            setIsLoading(false);
            setSent(true);
            setErr(false);
            form.current.reset();
              
          }, error => {
            setIsLoading(false);
            setErr(true);
            setSent(false);
        })
    }

    return(
        <>
        <div className="container mt-3">
            <center>
                <h1 className="arrow">Contact Me</h1>
            <div className="message">
            <div>
             <div className="contact-details">
                <div className="adress">
                    <div className="dark-box box-hover mt-2">
                    <h2><i className="bx bx-map"></i><span className="text-muted">Address</span></h2>
                    <p>Nairobi, Kenya</p>
                    </div>
                </div>
                <div className="adress">
                    <div className="dark-box box-hover mt-2">
                    <h2><i className="bx bx-mobile"></i><span className="text-muted">Phone</span></h2>
                    <p>+254712432771</p>
                    </div>
                </div>
                <div className="adress">
                    <div className="dark-box box-hover mt-2">
                    <h2><i className="bx bx-paper-plane"></i><span className="text-muted">Email</span></h2>
                    <p><a style={{color:"#000000"}} href="index.html#">dianahmongina2@gmail.com</a></p>
                    </div>
                </div>
                </div>
             </div>
             <div className="">
                {/* <div className="col-lg-4 mt-5">
                <LazyLoad height={300}>
                <iframe title="Abzed's Location"
                src="https://maps.google.com/maps?q=Nairobi+nairobit&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-100 w-100" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                </LazyLoad>
                </div> */}

                    <div className="">
                    <h4 className="drop-line mb-2">Reach Out To <span>Me</span></h4>

                    {sent ? <div className="sent-message text-success my-3 mt-5">Your message has been sent. Thank you</div> : false}
                    {err ? <div className="err-message text-danger my-1">There was a problem sending your message. Please try again!</div> : false}

                    {
                        isLoading || sent ? false
                        :
                        <form ref={form} onSubmit={sendEmail} className="php-email-form">
                            <div className="">
                                <div className=" form-group">
                                <input type="text" name="name" className=" email form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className=" form-group mt-3">
                                <input type="email" className="form-control email" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control email" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control"rows="5" name="message"  placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" className=" email btn btn-outline-secondary mt-3">Send Message</button>
                        </form>
                    }
        
                    <div className="my-3" >
                        {
                            isLoading ?
                            <div className="mt-5 my-5">
                            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                            <div className="error-message">Sending... </div>
                            </div>
                            :
                            false
                        }
                    </div>

                </div>
                </div>
             </div>

                
            </center>
        </div>
        </>
    )
}