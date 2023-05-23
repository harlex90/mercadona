import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";
import usePromos from "../hooks/usePromos";
import Entete from "./Entete";

const AdminListPromotions = () => {
    const { promos } = usePromos();
    const { products } = useProducts();

    const navigate = useNavigate();
    const onAddPromo = () => {
        navigate('/admin/promos/create')
    };

    return (
        <div>
            <Entete />
            <button onClick={onAddPromo}>Add promotion</button>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", margin: "20px 0px" }}>
            {promos.map((promo) => (
                <div key={promo.id} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <p style={{ margin: "0px" }}>id: {promo.id}</p>
                    <p style={{ margin: "0px" }}>product: {products.find((product) => product.id === promo.product_id)?.name}</p>
                    <p style={{ margin: "0px" }}>discount: {promo.discount}</p>
                    <p style={{ margin: "0px" }}>start_date: {new Date(promo.start_date).toString()}</p>
                    <p style={{ margin: "0px" }}>end_date: {new Date(promo.end_date).toString()}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default AdminListPromotions;