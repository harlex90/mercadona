import ListPromos from "../components/ListPromos";
import Entete from "./Entete";
import Footer from "./Footer";

function Home() {
    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "1OOvh"}}>
           <Entete />
           <ListPromos />
           <Footer />
        </div>
    )
}




export default Home;