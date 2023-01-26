import { Link } from "react-router-dom";

export default function About(){
    return(
        <>
            <section className="intro text-center section-padding color-bg" id="about">
                <center>
                    <div className="container">
                        <div className="row">
                            <div className="col-1 col-md-offset-2 wp1"></div>
                            <div className="col-10 col-md-offset-2 wp1 my-5">
                                <h1 className="arrow">A little <span>about</span> me</h1>
                                <p>
                                I am a Software Engineer with 2+ years of experience developing
                                awesome web applications. I primarily tend to lean towards using
                                Django and React for my web applications and I enjoy coding all the
                                time. Am also a passionate technical instructor and writer with the aim
                                of supporting the next generation of techies. Moreover, I've worked as
                                a team lead in various projects, am a team player and a fast learner
                                very flexible to work as a frontend or backend developer.
                                   </p>
                            <Link to="/resume" className="btn btn-outline-light mt-3">Resume</Link>
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

                    <div className="skills-main">
                    <div className="tools">
                    <h4 className="skill-header">AWS</h4>
                    <div className="side-line">
                        <p className="skill-name">Serverless</p>
                    </div>
                    <div className="side-line">
                        <p className="skill-name">Docker</p>
                    </div>
                    <div className="side-line">
                        <p className="skill-name">Kubernetes</p>
                    </div>
                    <div className="side-line">
                        <p className="skill-name">S3 Buckets</p>
                    </div>
                    <div className="side-line pb-0">
                        <p className="skill-name">Lambda</p>
                    </div>
   
                   </div>

                       <div className="javascript">
                        <h4 className="skill-header">Javascript</h4>
                        <div className="side-line">
                            <p className="skill-name">React</p>
                        </div>
                        <div className="side-line">
                            <p className="skill-name">Angular</p>
                        </div>
                        <div className="side-line">
                            <p className="skill-name">JQuery</p>
                        </div>
                        <div className="side-line">
                            <p className="skill-name">NodeJS</p>
                        </div>
                        <div className="side-line pb-0">
                            <p className="skill-name">AJAX</p>
                        </div>
                       </div>

                       <div className="python">
                        <h4 className="skill-header">Python</h4>
                        <div className="side-line">
                            <p className="skill-name">Django</p>
                        </div>
                        <div className="side-line">
                            <p className="skill-name">Django REST</p>
                        </div>
                        <div className="side-line pb-0">
                            <p className="skill-name">Flask</p>
                        </div>

                        <div className="ruby">
                        <h4 className="skill-header">Ruby</h4>
                        <div className="side-line pb-0">
                            <p className="skill-name">Ruby on Rails</p>
                        </div>
                       </div>
                       </div>

                       <div className="add-ons">
                        <h4 className="skill-header">HTML</h4>
                        <div className="side-line">
                            <p className="skill-name">CSS</p>
                        </div>
                        <div className="side-line">
                            <p className="skill-name">Bootstrap</p>
                        </div>
                        <div className="side-line">
                            <p className="skill-name">MDBootstrap</p>
                        </div>
                        <div className="side-line pb-0">
                            <p className="skill-name">Tailwind</p>
                        </div>
                       </div>

                       <div className="hosting">
                        <h4 className="skill-header">Heroku</h4>
                        <div className="side-line">
                            <p className="skill-name">Netlify</p>
                        </div>
                        <div className="side-line">
                            <p className="skill-name">Vercel</p>
                        </div>
                        <div className="side-line">
                            <p className="skill-name">Render</p>
                        </div>
                        <div className="side-line pb-0">
                            <p className="skill-name">Github</p>
                        </div>
                       </div>

                       <div className="databases">
                        <h4 className="skill-header">PostgreSQL</h4>
                        <div className="side-line">
                            <p className="skill-name">DynamoDB</p>
                        </div>
                        <div className="side-line">
                            <p className="skill-name">SQLite</p>
                        </div>
                        <div className="side-line pb-0">
                            <p className="skill-name">MySQL</p>
                        </div>
                       </div>

                    </div>

                </div>
        
        </>
    )
}