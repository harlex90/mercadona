import { useIsAuthenticated } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";


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
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            {isAuthenticated() && (
            <h3>
            CATEGORIES
            </h3>)}
        <div style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center", gap: "50px"}}>
            {isAuthenticated() && <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "80px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}><a href="#" onClick={onPlus} style={{textDecoration: "none"}}>+</a></button>}
            {isAuthenticated() && <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "80px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}><a href="#" onClick={onMinus} style={{textDecoration: "none"}}>-</a></button>}
            
            
            
        </div>
        {categories.map((category) => (
        <div key={category.id} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ margin: "0px" }}>id: {category.id}</p>
            <Link to={`/admin/categories/${category.id}`}>name: {category.name}</Link>
        </div>
        ))}
        </div>

    )
}

export default AdminCategoryButtons;