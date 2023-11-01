import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const AdminCategoryButtons = () => {

    const isAuthenticated = useIsAuthenticated();

    const navigate = useNavigate();
    
    const onPlus = () => {
        navigate('/admin/categories/create')
         }

    const onMinus = () => {
        navigate("/admin/categories/delete")
    }

    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h3>
            CATEGORIES
        </h3>
        <div style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center", gap: "50px"}}>
            {isAuthenticated() && <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "80px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}><a href="#" onClick={onPlus} style={{textDecoration: "none"}}>+</a></button>}
            {isAuthenticated() && <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "80px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}><a href="#" onClick={onMinus} style={{textDecoration: "none"}}>-</a></button>}
            
            
        </div>

        </div>

    )
}

export default AdminCategoryButtons;