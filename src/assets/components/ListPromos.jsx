import caddie from "../../assets/caddie.jpg";
import guitare from "../../assets/guitare.jpg";
import fauteuil from "../../assets/fauteuil.jpg"
import tableau from "../../assets/tableau.jpg"



const products = [
    {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "id": 1,
        "image": guitare,
        "name": "Guitare bleu",
        "price": "1000€", 
        "new_price": "700€",
        "start_date": "4 mai 2023",
        "end_date": "1 juin 2023"
    }, {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
        "id": 2, 
        "image": caddie, 
        "name": "Guitare rouge", 
        "price": "1100€",
        "new_price": "750€",
        "start_date": "30 avril 2023",
        "end_date": "12 juin 2023"
    }, {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "id": 1,
        "image": fauteuil,
        "name": "Guitare bleu",
        "price": "1000€", 
        "new_price": "700€",
        "start_date": "4 mai 2023",
        "end_date": "1 juin 2023"
    }, {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
        "id": 2, 
        "image": tableau, 
        "name": "Guitare rouge", 
        "price": "1100€",
        "new_price": "750€",
        "start_date": "30 avril 2023",
        "end_date": "12 juin 2023"
    }, {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "id": 1,
        "image": guitare,
        "name": "Guitare bleu",
        "price": "1000€", 
        "new_price": "700€",
        "start_date": "4 mai 2023",
        "end_date": "1 juin 2023"
    }, {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
        "id": 2, 
        "image": caddie, 
        "name": "Guitare rouge", 
        "price": "1100€",
        "new_price": "750€",
        "start_date": "30 avril 2023",
        "end_date": "12 juin 2023"
    }
];

const PromoCard = ({ product }) => {
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{border: '1px solid black', borderRadius: '10px', width: "300px", height:"375px"}}> 
                <p style={{display: "flex", justifyContent: "center", fontSize:"20px"}}>{product.name}</p>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img
                        src={product.image}
                        alt={"product image"} 
                        style={{display: "flex", justifyContent: "center", width: 150, height: 150}}
                    />
                </div>
                <div style={{display: "flex", flexDirection: "column", marginRight:"10px", gap: "15px", fontSize:"20px"}}>
                    <p style={{display: "flex", justifyContent: "center", marginLeft: "10px", marginRight: "10px", marginBottom: "0px", fontSize:"15px"}}>{product.description}</p>
                    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{fontSize:"12px", color: "red", margin: "0px"}}>En promotion du {product.start_date}</p>
                            <p style={{fontSize:"12px", color: "red", margin: "0px"}}>au {product.end_date}</p>
                        </div>
                        <div>
                            <p style={{textDecoration: "line-through", margin: "1px"}}>{product.price}</p>
                            <p style={{margin: "1px", color: "red", fontSize: "25px"}}>{product.new_price}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const ListPromos = () => {
    return(
            <div style={{display: "flex", justifyContent: "space-around"}}>
                {products.map((product) => <PromoCard product={product} />)}
            </div>
    )
}

export default ListPromos;