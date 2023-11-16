import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import { useIsAuthenticated } from "react-auth-kit";

const AdminListCategories = () => {
    const { categories } = useCategories();
    const isAuthenticated = useIsAuthenticated();

    const navigate = useNavigate();
    const onAddCategory = () => {
        navigate('/admin/categories/create')
    };

    if (!isAuthenticated()) return null;

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px"}}>
            
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
    );
}

export default AdminListCategories;