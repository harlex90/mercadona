import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import Entete from "./Entete";

const AdminCreatePromos = () => {
    const { products } = useProducts();

    const [inputDiscount, setInputDiscount] = React.useState(0);
    const [inputProduct, setInputProduct] = React.useState();

    const navigate = useNavigate();
    const onSubmit = () => {
        if(!inputProduct) {
            alert("you must choose a product")
            return;
        }
        axios.post('/promotions', {
            product_id: inputProduct,
            discount: inputDiscount,
            start_date: 0,
            end_date: 0,
        }).then(() => {
            navigate('/admin/promos')
        })
    }
    return (
        <div>
            <Entete />
            <p>Create a new promo</p>
            <select value={inputProduct} onChange={(e) => setInputProduct(e.currentTarget.value)}>
                <option value={null}> -- select an option -- </option>
                {products.map((product) => (
                    <option key={product.id} value={product.id} label={product.name} />
                ))}
            </select>
            <input type="number" value={inputDiscount} min={0} max={1} step={0.05} onChange={(e) => setInputDiscount(parseFloat(e.currentTarget.value))} placeholder="discount of the product"/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default AdminCreatePromos;