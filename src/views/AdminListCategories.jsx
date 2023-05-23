import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import Entete from "./Entete";

const AdminListCategories = () => {
    const { categories } = useCategories();

    const navigate = useNavigate();
    const onAddCategory = () => {
        navigate('/admin/categories/create')
    };

    return (
        <div>
            <Entete />
            <button onClick={onAddCategory}>Add category</button>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", margin: "20px 0px" }}>
            {categories.map((category) => (
                <div key={category.id} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <p style={{ margin: "0px" }}>id: {category.id}</p>
                    <p style={{ margin: "0px" }}>name: {category.name}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default AdminListCategories;