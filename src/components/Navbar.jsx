import { useIsAuthenticated, useSignOut, useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const isAuthenticated = useIsAuthenticated();
    const signout = useSignOut()
    const navigate = useNavigate();

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

export default Navbar;