import { useIsAuthenticated, useSignOut, useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import { useState } from "react";
import TitleAndLogo from "../components/TitleAndLogo";

const Navbar = () => {
    const isAuthenticated = useIsAuthenticated();
    const signout = useSignOut()
    const navigate = useNavigate();
    const signin = useSignIn()

    const onSignin = () => {
        navigate("/loginadmin")
    }

    const onSignout = () => {
       signout();
       navigate('/')
    }
    const navElements = [{title: "Home", id:1, link: "/home"},
                        {title: "Catalogue", id: 2, link: "/catalogue"},
                        {title: "About", id: 3, link: "/about"}]
                        

    const listNavElements = navElements.map(element =>
    <li key={element.id}>
        <Link to={element.link} style={{textDecoration: "none", fontWeight: "bold"}}>
            {element.title}
        </Link>
    </li>
    );
    return(
        <ul style={{display: "flex", justifyContent: "center", listStyleType: "none", margin: 0, padding: 0, gap: "100px", alignItems: "center"}}>
            {listNavElements}
            {isAuthenticated() && <li><a style={{textDecoration: "none", fontWeight: "bold"}} href="#" onClick={onSignout}>Signout</a></li>}
            {!isAuthenticated() && <li><a style={{textDecoration: "none", fontWeight: "bold", cursor: "pointer"}} href="#" onClick={onSignin}>Sign In</a></li>}
        </ul>
    )                    
}

function Entete() {
    const [selectedCategory, setSelectedCategory] = useState()
    const {categories} = useCategories()
    
    return ( 
            <nav style={{display: "flex", alignItems: "center", marginTop: "70px", marginBottom: "70px", width: "100%"}}>
                {/* <div style={{display: "flex", justifyContent: "center", flex: 1, gap: 10, alignItems: "center"}}>
                    <div style={{display: "flex"}}>
                        <img
                            src={entete.image}
                            alt={"caddie"}
                            style={{display: "flex", width: 50, height: 50, borderRadius: "50%", border: '2px solid black'}}
                        />
                    </div>
                    <div style={{display: "block"}}>
                        <h1 style={{margin: 0}}>{entete.title}</h1>
                        <h4 style={{fontStyle: "italic", margin: 0}}>
                            {entete.caption}
                        </h4>
                    </div>
                </div> */}
                <TitleAndLogo/>
                
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Navbar/>
                </div>
            
                {/* <div style={{display: "flex", justifyContent: "center", flex: 1, gap: 10, alignItems: "center"}}>
                    <img
                        src={loupe}
                        alt={"loupe"}
                        style={{display: "flex", width: 30, height: 30}}
                    />
                    <p>Catégories</p>
                </div>
                    */}
            </nav>
                
    )
}

export default Entete;