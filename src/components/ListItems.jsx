import useProducts from "../hooks/useProducts"
import caddie from "../assets/caddie.jpg";

const ItemCard = ({ product }) => {
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{border: '1px solid black', borderRadius: '10px', width: "300px", height:"375px"}}> 
                <p style={{display: "flex", justifyContent: "center", fontSize:"20px"}}>{product.name}</p>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img
                        src={caddie}
                        alt={product.name} 
                        style={{display: "flex", justifyContent: "center", width: 150, height: 150}}
                    />
                </div>
                <div style={{display: "flex", flexDirection: "column", marginRight:"10px", gap: "15px", fontSize:"20px"}}>
                    <p style={{display: "flex", justifyContent: "center", marginLeft: "10px", marginRight: "10px", marginBottom: "0px", fontSize:"15px"}}>{product.description}</p>
                    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        
                        <div>
                            <p style={{margin: "1px"}}>{product.price} €</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

const ListItems = ({ selectedCategory }) => {
    const { products } = useProducts();

    const filteredProducts = selectedCategory ? 
        products.filter((product) => product.category_id === selectedCategory)
        : products;

    return(
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
            {filteredProducts.map((product) => <ItemCard product={product} />)}
        </div>
    )
}

export default ListItems;