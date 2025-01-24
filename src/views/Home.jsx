import ListPromos from "../components/ListPromos";
import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const Home = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <div style={{display: "flex", alignItems: "center", marginTop: "70px", marginBottom: "70px"}}>
                <TitleAndLogo/>
                <div style={{display: "flex", justifyContent: "center", flex: "2 1 10%"}}>
                    <Navbar/>
                </div>
                <div style={{display: "flex", flex: "1 1 10%"}}>

                </div>
            </div>
            <div>
                <ListPromos />
            </div>
           <Footer />
        </div>
    )
}




export default Home;
