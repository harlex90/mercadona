import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import Entete from "./Entete";


const AdminDeleteProduct = () => {
    const { products } = useProducts();
    
    const [inputProduct, setInputProduct] = React.useState();
    const [suppressionProduct, setSuppressionProduct] = React.useState(inputProduct);


    
    const navigate = useNavigate();
    const onSubmit = () => {
        if(!inputProduct) {
            alert("you must choose a product")
            return;
        }
        axios.delete(`/products/${inputProduct}`).then(() => {
            navigate('/admin/products')
        })
    }
    return (
        <div>
            <Entete />
            <p>Suppression</p>
            <select value={inputProduct} onChange={(e) => setInputProduct(parseInt(e.currentTarget.value))}>
                <option value={null}> -- select an option -- </option>
                {products.map((product) => (
                    <option key={product.id} value={product.id} label={product.name} />
                ))}
            </select>
            <button onChange={(e) => setSuppressionProduct(e.currentTarget.value)}>Delete</button>
            <button onClick={onSubmit}>Submit</button>
            
        </div>
    )
}

export default AdminDeleteProduct;