import caddie from "../assets/caddie.jpg";

const entete = {
    title: "MERCADONA",
    caption: "Des promos toute l'année !",
    image: caddie,
};

function Entete() {
    return (
        <div>
            <div>
                <nav style={{backgroundColor: "red", width: "100%", height: "70px"}}>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="catalogue">Catalogue</a></li>
                        <li><a href="loginadmin">Sign in</a></li>
                        <li><a href="#">Sign up</a></li>
                    </ul>
                    <div style={{display: "flex", justifyContent:"center", gap: 10, alignItems: "center"}}>
                        <h1 className="title">{entete.title}</h1>
                        <img
                            src={entete.image}
                            alt={"caddie"}
                            style={{display: "flex", width: 50, height: 50, borderRadius: "50%", border: '2px solid black'}}
                        />
                    </div>
                </nav>
                
            </div>
            <div style={{display: "flex", justifyContent:"center", fontSize: "30px", fontStyle: "italic"}}>
                <h4>
                    {entete.caption}
                </h4>
            </div>
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