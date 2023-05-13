import caddie from "../assets/caddie.jpg";

const entete = {
    title: "MERCADONA",
    caption: "Des promos toute l'année !",
    image: caddie,
};


function Home() {
    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li><a href="#">Catalogue</a></li>
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#">Sign up</a></li>
                    </ul>
                    <h1 className="title">{entete.title}</h1>
                </nav>
                
            </div>
            <div style={{display: "flex", justifyContent:"center"}}>
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
            </div>
            
        </div>
    )
}


export default Home;