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
                <div className="row contact-details mt-2">
                <div className="col-md-4">
                    <div className="dark-box box-hover mt-2">
                    <h2><i className="bx bx-map"></i><span className="text-muted">Address</span></h2>
                    <p>Nairobi, Kenya</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="dark-box box-hover mt-2">
                    <h2><i className="bx bx-mobile"></i><span className="text-muted">Phone</span></h2>
                    <p>+254 759 507 042</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="dark-box box-hover mt-2">
                    <h2><i className="bx bx-paper-plane"></i><span className="text-muted">Email</span></h2>
                    <p><a href="index.html#">ibraabzed@gmail.com</a></p>
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col-lg-4 mt-5">
                <LazyLoad height={300}>
                <iframe title="Abzed's Location"
                src="https://maps.google.com/maps?q=Nairobi+nairobit&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-100 w-100" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                </LazyLoad>
                </div>

                    <div className="col-lg-8 mt-5">
                    <h4 className="drop-line mb-2">DROP ME A <span>LINE</span></h4>

                    {sent ? <div className="sent-message text-success my-3 mt-5">Your message has been sent. Thank you</div> : false}
                    {err ? <div className="err-message text-danger my-1">There was a problem sending your message. Please try again!</div> : false}

                    {
                        isLoading || sent ? false
                        :
                        <form ref={form} onSubmit={sendEmail} className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary mt-3">Send Message</button>
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
            </center>
        </div>
        <Footer />
        </>
    )
}