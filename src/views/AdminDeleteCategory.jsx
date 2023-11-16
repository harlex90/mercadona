import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";


const AdminDeleteCategory = () => {
    const { categories } = useCategories();
    
    const [inputCategory, setInputCategory] = React.useState();
    
    const navigate = useNavigate();
    const onSubmit = () => {
        if(!inputCategory) {
            alert("Vous devez choisir une catégorie")
            return;
        }
        axios.delete(`/categories/${inputCategory}`).then(() => {
            navigate('/admin/categories')
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
                    <h3>Supprimer une catégorie</h3>
                </div>
                <div>
                    <select value={inputCategory} onChange={(e) => setInputCategory(parseInt(e.currentTarget.value))}>
                        <option value={null}> -- Choisissez une catégorie -- </option>
                        {categories.map((category) => (
                        <option key={category.id} value={category.id} label={category.name} />
                        ))}
                    </select>
                    <button onClick={onSubmit}>Supprimer</button>
                </div>
            </div>
            
        </div>
    )
}

export default AdminDeleteCategory;