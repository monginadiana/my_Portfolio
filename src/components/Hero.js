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
        let typed_strings = "Software Engineer, Technical Mentor, Technical Writer, Freelancer, Environmentalist, Mental Health Activist"
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
        <div className="hero">
        <section id="hero" >
            <div className="container" data-aos="fade-up" data-aos-delay="700">
            <h1 className="hello">Hi, I'm</h1>
                <h1>Diana Mongina</h1>
                <p>a <span className="typed">
                
                </span></p>
                <div className="social-links">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/DianahMongina?t=ibiY5QqKnvpanVvrjDvajw&s=09" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/monginadiana" className="github"><i className="bx bxl-github"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/diana-mongina-74196a1a2//" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </section>
        </div>
        </>
    )
}