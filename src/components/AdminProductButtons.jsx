import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const AdminProductButtons = () => {

    const isAuthenticated = useIsAuthenticated();

    const navigate = useNavigate();
    
    const onPlus = () => {
        navigate('/admin/products/create')
         }

    const onMinus = () => {
        navigate("/admin/products/delete")
        }

    const onPromotion = () => {
        navigate('/admin/promos/create')
         }

    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h3>
                PRODUITS
            </h3>
            <div style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center", gap: "50px"}}>
                {isAuthenticated() && (
                <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "80px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}>
                    <a href="#" onClick={onPlus} style={{textDecoration: "none"}}>+</a>
                </button>)}
                {isAuthenticated() && (
                    <a href="#" onClick={onMinus} style={{textDecoration: "none", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black", display:"flex", justifyContent: "center", alignItems: "center", fontSize: "80px", backgroundColor: "white"}}>
                        -
                    </a>
                )}
            
                {isAuthenticated() && <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "15px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}><a href="#" onClick={onPromotion} style={{textDecoration: "none"}}>Promotion</a></button>}
            </div>

        </div>

    )
}

export default AdminProductButtons;