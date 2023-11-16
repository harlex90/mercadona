import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const AdminProductButtons = () => {
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    
    const onPlus = () => {
        navigate('/admin/products/create')
    }

    const onMinus = () => {
        navigate("/admin/products/delete")
    }

    const onPromotion = () => {
        navigate('/admin/promos/create')
    }

    if (!isAuthenticated()) return null;

    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center", gap: "50px"}}>
                <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "80px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}>
                    <a href="#" onClick={onPlus} style={{textDecoration: "none"}}>+</a>
                </button>
                <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "80px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}>
                    <a href="#" onClick={onMinus} style={{textDecoration: "none"}}>-</a>
                </button>
                <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "15px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}>
                    <a href="#" onClick={onPromotion} style={{textDecoration: "none"}}>Promotion</a>
                </button>
            </div>

        </div>

    )
}

export default AdminProductButtons;