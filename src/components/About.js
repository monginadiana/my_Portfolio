import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section
        className="intro text-center section-padding color-bg"
        id="about"
      >
        <center>
          <div className="container">
            <div className="row">
              <div className="col-1 col-md-offset-2 wp1"></div>
              <div className="col-10 col-md-offset-2 wp1 my-5">
                <h1 className="arrow">
                  About Diana
                </h1>
                <p>
                  Experienced software engineer with 2+ years of experience and
                  a passion for developing innovative programs that expedite the
                  efficiency and effectiveness of organizational success.
                  Well-versed in technology and writing code to create systems
                  that are reliable and user-friendly. Skilled leader who has
                  the proven ability to motivate, educate, and manage a team of
                  professionals to build software programs and effectively track
                  changes. Confident communicator, strategic thinker, and
                  innovative creator.
                </p>
                <Link to="/resume" className="btn btn-outline-light mt-3">
                  Resume
                </Link>
              </div>
              <div className="col-1 col-md-offset-2 wp1"></div>
            </div>
          </div>
        </center>
      </section>
      <div className="container">
        <center>
          <h2 className="skills my-3">Skills</h2>
        </center>

        <div class=" wow fadeInUp container-skillbar" data-wow-delay="0.2s">
          <div class="skillbar clearfix " data-mdb-percent="90%">
            <div class="skillbar-title" style={{background: "#218559"}}><span>HTML5</span></div>
            <div class="skillbar-bar" style={{background: "#218559", width:"90%"}}></div>
            <div class="skill-bar-percent">90%</div>
          </div>

          <div class="skillbar clearfix " data-percent="90%">
            <div class="skillbar-title" style={{background: "#EBB035"}}><span>CSS3</span></div>
            <div class="skillbar-bar" style={{background: "#EBB035" , width:"90%"}}></div>
            <div class="skill-bar-percent">90%</div>
          </div>

          <div class="skillbar clearfix " data-percent="88%">
            <div class="skillbar-title" style={{background: "#332D2D"}}><span>Tailwind Css</span></div>
            <div class="skillbar-bar" style={{background: "#332D2D", width:"88%"}}></div>
            <div class="skill-bar-percent">88%</div>
          </div> 

          <div class="skillbar clearfix " data-percent="85%">
            <div class="skillbar-title" style={{background: "#6840D4"}}><span>React Js</span></div>
            <div class="skillbar-bar" style={{background: "#6840D4",width:"85%"}}></div>
            <div class="skill-bar-percent">85%</div>
          </div> 

          <div class="skillbar clearfix " data-percent="82%">
            <div class="skillbar-title" style={{background: "#3B71CA"}}><span>Rails</span></div>
            <div class="skillbar-bar" style={{background: "#3B71CA", width:"84%"}}></div>
            <div class="skill-bar-percent">82%</div>
          </div> 

          <div class="skillbar clearfix " data-percent="70%">
            <div class="skillbar-title" style={{background: "#06A2CB"}}><span>Django</span></div>
            <div class="skillbar-bar" style={{background: "#06A2CB", width:"70%"}}></div>
            <div class="skill-bar-percent">70%</div>
          </div> 
          <div class="skillbar clearfix " data-percent="70%">
            <div class="skillbar-title" style={{background: "#DD1E2F"}}><span>Javascript</span></div>
            <div class="skillbar-bar" style={{background: "#DD1E2F", width:"70%"}}></div>
            <div class="skill-bar-percent">70%</div>
          </div> 
          <div class="skillbar clearfix " data-percent="55%">
            <div class="skillbar-title" style={{background: "#DD1E2F"}}><span>Docker</span></div>
            <div class="skillbar-bar" style={{background: "#DD1E2F", width:"55%"}}></div>
            <div class="skill-bar-percent">55%</div>
          </div> 
          <div class="skillbar clearfix " data-percent="45%">
            <div class="skillbar-title" style={{background: "#DD1E2F"}}><span>Kubernetes</span></div>
            <div class="skillbar-bar" style={{background: "#DD1E2F", width:"45%"}}></div>
            <div class="skill-bar-percent">45%</div>
          </div> 
        </div>
      </div>

    </>
  );
}
