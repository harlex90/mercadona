import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import Entete from "./Entete";

const AdminUpdateProduct = () => {
    const { products } = useProducts();
    
    const [inputName, setInputName] = React.useState("");
    const [inputDescription, setInputDescription] = React.useState("");
    const [inputPrice, setInputPrice] = React.useState(0);
    const [inputCategory, setInputCategory] = React.useState();

    
    const navigate = useNavigate();
    const onSubmit = () => {
        if(!inputProduct) {
            alert("you must choose a product")
            return;
        }
        axios.post('/promotions', {
            product_id: inputProduct,
            discount: inputDiscount,
            start_date: parseInt(new Date(inputStart).getTime() / 1000), // TODO remove / 1000 after backend fix int type
            end_date: parseInt(new Date(inputEnd).getTime() / 1000), // TODO remove / 1000 after backend fix int type
        }).then(() => {
            navigate('/admin/promos')
        })
    }

    return (
        <div>
            <Entete />
            <p>Create a new promo</p>
            <select value={inputProduct} onChange={(e) => setInputProduct(parseInt(e.currentTarget.value))}>
                <option value={null}> -- select an option -- </option>
                {products.map((product) => (
                    <option key={product.id} value={product.id} label={product.name} />
                ))}
            </select>
            <input type="number" value={inputDiscount} min={0} max={1} step={0.05} onChange={(e) => setInputDiscount(parseFloat(e.currentTarget.value))} placeholder="discount of the product"/>
            <input type="date" value={inputStart} onChange={(e) => setInputStart(e.currentTarget.value)} />
            <input type="date" value={inputEnd} onChange={(e) => setInputEnd(e.currentTarget.value)} />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default AdminCreatePromos;