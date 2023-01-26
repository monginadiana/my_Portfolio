import { useEffect } from "react"
import AOS from "aos"
import Typed from 'typed.js';

export default function Hero(){

    useEffect(() => {
        AOS.init({
      
            // duration: 1000,
            easing: 'ease-in-out',
            // once: true,
            // mirror: false
          })
    
        AOS.refresh();
    
        const typed = document.querySelector('.typed')
        let typed_strings = "Software Engineer, Cloud Developer, Technical Instructor, Technical Writer, Freelancer"
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
          strings: typed_strings,
          loop: true,
          typeSpeed: 200,
          backSpeed: 200,
          backDelay: 1200
        });    
    }, [])
    
    return(
        <>
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="fade-up" data-aos-delay="700">
            <h1 className="hello">Hello, I'm</h1>
                <h1>Abzed Mohammed</h1>
                <p>a <span className="typed">
                
                </span></p>
                <div className="social-links">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/AbzedMohammed" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://facebook.com/abzed.tetz" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/abzedmohammed" className="github"><i className="bx bxl-github"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://wa.me/254759507042?text=Hello" className="whatsapp"><i className="bx bxl-whatsapp"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://t.me/+254759507042" className="telegram"><i className="bx bxl-telegram"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://dev.to/abzed" className="dev"><i className="bx bxl-dev-to"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abzed-mohammed-630bb181/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </section>
        </>
    )
}