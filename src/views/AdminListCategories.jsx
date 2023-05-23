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
            {categories.map((category) => (
                <div>
                    <p>name: {category.name}</p>
                </div>
            ))}
        </div>
    )
}

export default AdminListCategories;