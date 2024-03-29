import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";


const AdminDeleteProduct = () => {
    const { products } = useProducts();
    
    const [inputProduct, setInputProduct] = React.useState();
    
    const navigate = useNavigate();
    const onSubmit = () => {
        if(!inputProduct) {
            alert("Vous devez choisir un produit")
            return;
        }
        axios.delete(`/products/${inputProduct}`).then(() => {
            navigate('/catalogue')
        })
    }
    return (
        <div>
            <div style={{display: "flex", alignItems: "center", marginTop: "70px", marginBottom: "70px"}}>
                <TitleAndLogo/>
                <div style={{display: "flex", justifyContent: "center", flex: "2 1 10%"}}>
                    <Navbar/>
                </div>
                <div style={{display: "flex", flex: "1 1 10%"}}>

                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", marginLeft: "10%"}}>
                <div>
                    <h3>Supprimer un produit</h3>
                </div>
                <div>
                    <select value={inputProduct} onChange={(e) => setInputProduct(parseInt(e.currentTarget.value))}>
                        <option value={null}> -- Choisissez un produit -- </option>
                        {products.map((product) => (
                        <option key={product.id} value={product.id} label={product.name} />
                        ))}
                    </select>
                    <button onClick={onSubmit}>Supprimer</button>
                </div>
            </div>
            
        </div>
    )
}

export default AdminDeleteProduct;