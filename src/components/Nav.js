import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

export default function Nav() {
    const [listView, setListView] = useState(false)
    const navigate = useNavigate()

    function handleListView(){
        setListView(listView => !listView)
    }

    function showHomePage(){
        navigate("/")
        window.location.reload()
    }
    
    return(
        <>
        <button onClick={handleListView} type="button" className="mobile-nav-toggle d-xl-none"><i id="view" className={listView? "bi bi-x mobile-nav-toggle" : "bi bi-list mobile-nav-toggle"}></i></button>
        <header id="header" className={listView ? "d-flex flex-row justify-content-center header-show" : "d-flex flex-row justify-content-center"}>
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a onClick={showHomePage} className="nav-link scrollto"><span>HOME</span></a></li>
                    <li><NavLink to="/about" className="nav-link scrollto"><span>ABOUT</span></NavLink></li>
                    

                    <li><NavLink to="/web-applications" className="nav-link scrollto"> <span>PROJECTS</span></NavLink></li>
                    <li><NavLink to="/contact" className="nav-link scrollto"><span>CONTACT</span></NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}