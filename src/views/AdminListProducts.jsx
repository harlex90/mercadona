import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";
import Entete from "./Entete";

const AdminListProducts = () => {
    const { products } = useProducts();
    const { categories } = useCategories();
    const navigate = useNavigate();

    const onAddProduct = () => {
        navigate('/admin/products/create')
    };

    return (
        <div>
            <Entete />
            <button onClick={onAddProduct}>Add products</button>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", margin: "20px 0px" }}>
                {products.map((product) => (
                    <div key={product.id} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ margin: "0px" }}>id: {product.id}</p>
                        <p style={{ margin: "0px" }}>name: {product.name}</p>
                        <p style={{ margin: "0px" }}>description: {product.description}</p>
                        <p style={{ margin: "0px" }}>price: {product.price}</p>
                        <p style={{ margin: "0px" }}>category: {categories.find((category) => category.id === product.category_id)?.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminListProducts;