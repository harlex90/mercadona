import caddie from "../assets/caddie.jpg";

const entete = {
    title: "MERCADONA",
    caption: "Des promos toute l'année !",
    image: caddie,
};

const TitleAndLogo = () => {
    return(
        <div style={{display: "flex", flex: "1 1 10%", justifyContent: "center", gap: 10, alignItems: "center"}}>
            <div style={{display: "flex"}}>
                <img
                    src={entete.image}
                    alt={"caddie"}
                    style={{display: "flex", width: 50, height: 50, borderRadius: "50%", border: '2px solid black'}}
                />
            </div>
            <div style={{display: "block"}}>
                <h1 style={{margin: 0}}>
                    {entete.title}
                </h1>
                <h4 style={{fontStyle: "italic", margin: 0}}>
                    {entete.caption}
                </h4>
            </div>
        </div>
    )
}

export default TitleAndLogo;

