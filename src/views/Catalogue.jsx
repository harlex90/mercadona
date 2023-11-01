import Entete from "./Entete";
import ListItems from "../components/ListItems";
import AdminProductButtons from "../components/AdminProductButtons";
import AdminCategoryButtons from "../components/AdminCategoryButtons";
import useCategories from "../hooks/useCategories";
import { useState } from "react";
import { useIsAuthenticated, useSignOut, useSignIn } from "react-auth-kit";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Catalogue = () => {
    // const categories = useCategories();
    const [selectedCategory, setSelectedCategory] = useState()
    const {categories} = useCategories()

    return(
        <div>
            <Entete />
            {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(parseInt(e.currentTarget.value))}>
                <option value={null}> -- Tous les produits -- </option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id} label={category.name} />
                ))}
            </select>
            <ListItems selectedCategory={selectedCategory}
             />

            <AdminProductButtons/>
            <AdminCategoryButtons/>
            
        
        </div>
    )
}






    
    


export default Catalogue;
