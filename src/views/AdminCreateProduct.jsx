import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import Entete from "./Entete";

const AdminCreateProduct = () => {
    const { categories } = useCategories();

    const [inputName, setInputName] = React.useState("");
    const [inputDescription, setInputDescription] = React.useState("");
    const [inputPrice, setInputPrice] = React.useState(0);
    const [inputCategory, setInputCategory] = React.useState();

    const navigate = useNavigate();
    const onSubmit = () => {
        if(!inputCategory) {
            alert("you must choose a category")
            return;
        }

        axios.post('/products', {
            category_id: inputCategory,
            name: inputName,
            description: inputDescription,
            price: inputPrice
        }).then(() => {
            navigate('/admin/products')
        })
    }
    return (
        <div>
            <Entete />
            <p>Create a new product</p>
            <select value={inputCategory} onChange={(e) => setInputCategory(e.currentTarget.value)}>
                <option value={null}> -- select an option -- </option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id} label={category.name} />
                ))}
            </select>
            <input type="text" value={inputName} onChange={(e) => setInputName(e.currentTarget.value)} placeholder="name of the product"/>
            <input type="text" value={inputDescription} onChange={(e) => setInputDescription(e.currentTarget.value)} placeholder="description of the product"/>
            <input type="number" value={inputPrice} onChange={(e) => setInputPrice(e.currentTarget.value)} placeholder="price of the product"/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default AdminCreateProduct;