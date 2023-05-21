const ProductCard = ({ product }) => {
    return(
            <div style={{display: "grid", gridTemplateColumns: "1", border: '1px solid black', borderRadius: '10px', width: "300px", height:"375px"}}> 
                <p style={{gridRow: "1", fontSize:"20px"}}>{product.name}</p>
                <img
                src={product.image}
                alt={"caddie"} 
                style={{display: "flex", justifyContent: "center", width: 100, height: 100}}
                />
                <div style={{display: "flex", flexDirection: "column", marginRight:"10px", marginTop: "150px", gap: "15px", fontSize:"20px"}}>
                    <p style={{display: "flex", justifyContent: "center", alignItems: "end", marginLeft: "10px", marginRight: "10px", marginBottom: "0px", fontSize:"15px"}}>{product.description}</p>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <p style={{fontSize:"10px", color: "red"}}>{"du " + product.start_date + " au " + product.end_date}</p>
                        </div>
                        <div>
                            <p style={{textDecoration: "line-through", margin: "1px"}}>{product.price}</p>
                            <p style={{margin: "1px", color: "red"}}>{product.new_price}</p>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}
