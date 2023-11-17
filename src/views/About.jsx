import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const About = () => {
    return(
        <div>
            <div style={{display: "flex", alignItems: "center", marginTop: "70px", marginBottom: "70px"}}>
                <TitleAndLogo/>
                <div style={{display: "flex", justifyContent: "center", flex: "2 1 10%"}}>
                    <Navbar/>
                </div>
                <div style={{display: "flex", flex: "1 1 10%"}}>

                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "10%", fontSize: "20px"}}>
                <h3 style={{marginBottom: "80px"}}>Mercadona : Un géant du retail innovant et écologiquement conscients</h3>
             <p>Forte de ses 1675 établissements répartis sur le territoire espagnol, Mercadona s'impose comme un pilier majeur dans le domaine du retail. Avec un chiffre d'affaires spectaculaire de 20 milliards d'euros, notre entreprise illustre son succès à travers une politique de prix compétitifs et des promotions régulières. Ainsi, nous nous assurons que nos clients peuvent toujours trouver une sélection d'au moins une centaine de produits en promotion, tout au long de l'année.</p>

<p>Toutefois, conscient de l'importance grandissante de la dimension écologique dans notre secteur, Mercadona a décidé de marquer un tournant dans sa stratégie de communication. Jusqu'à présent, notre communication a principalement reposé sur l'utilisation de tracts publicitaires. 
    Cependant, dans un effort pour économiser les ressources et minimiser notre impact environnemental, nous avons fait le choix de vous proposer cette applicationen web innovante, qui vous permet d'accéder à nos promotions et de découvrir nos produits à partir de vos appareils connectés. Ce changement traduit notre engagement à adopter des pratiques plus durables, tout en améliorant votre expérience client.</p>
            </div>
            <Footer />
        </div>

    )
}

export default About;

