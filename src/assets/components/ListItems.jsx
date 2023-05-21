const products = [
    {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "id": 1,
        "image": guitare,
        "name": "Guitare bleu",
        "price": "1000€"
        
    }, {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
        "id": 2, 
        "image": caddie, 
        "name": "Guitare rouge", 
        "price": "1100€"
    }, {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "id": 1,
        "image": fauteuil,
        "name": "Guitare bleu",
        "price": "1000€"
    }, {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
        "id": 2, 
        "image": tableau, 
        "name": "Guitare rouge", 
        "price": "1100€"
    }, {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "id": 1,
        "image": guitare,
        "name": "Guitare bleu",
        "price": "1000€"
    }, {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
        "id": 2, 
        "image": caddie, 
        "name": "Guitare rouge", 
        "price": "1100€"
    }
];


const ItemCard = ({ product }) => {
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
                        
                        <div>
                            <p style={{margin: "1px"}}>{product.price}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

const ListItems = () => {
    return(
            <div style={{display: "flex", justifyContent: "space-around"}}>
                {products.map((product) => <ItemCard product={product} />)}
            </div>
    )
}