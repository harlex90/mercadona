import { useIsAuthenticated } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import useCategories from "../hooks/useCategories";
import ItemCategory from "./ItemCategory";


const AdminCategoryButtons = () => {
    const navigate = useNavigate();

    const { categories } = useCategories();
    const isAuthenticated = useIsAuthenticated();
    
    const onPlus = () => {
        navigate('/admin/categories/create')
    }

    const onMinus = () => {
        navigate("/admin/categories/delete")
    }

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "5%", marginBottom: "5%", width: "100%"}}>
          {isAuthenticated() && (
            <h3 style={{display: "flex", marginLeft: "10%", gap: "100px", width: "100%"}}>
              CATEGORIES
            </h3>)}
            <div style={{display: "flex", marginLeft: "10%", gap: "100px", width: "100%"}}>
              <div style={{display: "flex", gap: "80px"}}>
                {categories.map((category) => <ItemCategory key={category.id} category={category} />)}
              </div>
              <div style={{display: "flex", alignItems: "center", gap: "50px"}}>
                {isAuthenticated() && <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "80px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}><a href="#" onClick={onPlus} style={{textDecoration: "none"}}>+</a></button>}
                {isAuthenticated() && <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "80px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}><a href="#" onClick={onMinus} style={{textDecoration: "none"}}>-</a></button>}
              </div>
            </div>
        
        </div>

    )
}

export default AdminCategoryButtons;