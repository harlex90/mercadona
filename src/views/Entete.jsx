import { useIsAuthenticated, useSignOut, useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import caddie from "../assets/caddie.jpg";
import loupe from "../assets/loupe.png";

const entete = {
    title: "MERCADONA",
    caption: "Des promos toute l'année !",
    image: caddie,
};

const DisplayNavbar = () => {

    const isAuthenticated = useIsAuthenticated();
    const signout = useSignOut()
    const navigate = useNavigate();
    const signin = useSignIn()

    const onSignin = () => {
        // signin();
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
        {/* <a style={{display: "flex", textDecoration: "none", fontWeight: "bold"}} to={element.link}> */}
            {/* {element.title} */}
        {/* </a> */}
        <Link to={element.link} style={{textDecoration: "none", fontWeight: "bold"}}>
            {element.title}
        </Link>
    </li>
    );
    return(
            
        <ul style={{display: "flex", justifyContent: "center", listStyleType: "none", margin: 0, padding: 0, gap: "100px", alignItems: "center"}}>
            {listNavElements}
            {isAuthenticated() && <li><a style={{textDecoration: "none", fontWeight: "bold"}} href="#" onClick={onSignout}>Signout</a></li>}
            {/* {!isAuthenticated() && <li><a style={{textDecoration: "none", fontWeight: "bold"}} href="/loginadmin" onClick={onSignin}>Sign In</a></li>} */}
            {!isAuthenticated() && <li><a style={{textDecoration: "none", fontWeight: "bold", cursor: "pointer"}} href="#" onClick={onSignin}>Sign In</a></li>}
    
        </ul>
    
    )                    
}

function Entete() {
    
    return (
        <div>
            
            <nav style={{display: "flex", alignItems: "center", marginTop: "70px", marginBottom: "70px", gap: "70px"}}>
                <div style={{display: "flex", justifyContent: "center", flex: 1, gap: 10, alignItems: "center"}}>
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
                </div>
                
                <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
                    <DisplayNavbar/>
                </div>
            
                <div style={{display: "flex", justifyContent: "center", flex: 1, gap: 10, alignItems: "center"}}>
                    <img
                        src={loupe}
                        alt={"loupe"}
                        style={{display: "flex", width: 30, height: 30}}
                    />
                    <p>Catégories</p>
                </div>
                   
            </nav>
                
        
            
        </div>
    )
}




export default Entete;


/* <div style={{display: "flex", justifyContent:"center"}}>
<h4>
    {entete.caption}
</h4>
</div>
<div style={{display: "flex", justifyContent:"center"}}>
<img
    src={entete.image}
    alt={"cart containing heart"}
    style={{ width: 250, height: 250, borderRadius: "50%", border: '2px solid black', marginTop: "22px"}}
/>
</div> */