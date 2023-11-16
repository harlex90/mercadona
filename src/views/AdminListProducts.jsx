import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";
import usePromos from "../hooks/usePromos";
import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";


const AdminListProducts = () => {
    const { products } = useProducts();
    const { promos } = usePromos();
    const { categories } = useCategories();
    const navigate = useNavigate();

    const onAddProduct = () => {
        navigate('/admin/products/create')
    };

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
            <button onClick={onAddProduct}>Add products</button>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", margin: "20px 0px" }}>
                {products.map((product) => (
                    <div key={product.id} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ margin: "0px" }}>id: {product.id}</p>
                        <p style={{ margin: "0px" }}>name: {product.name}</p>
                        <p style={{ margin: "0px" }}>description: {product.description}</p>
                        <p style={{ margin: "0px" }}>price: {product.price}</p>
                        <p style={{ margin: "0px" }}>category: {categories.find((category) => category.id === product.category_id)?.name}</p>
                        <p style={{ margin: "0px" }}>has promo: {promos.some((promo) => promo.product_id === product.id).toString()}</p> {/* TODO, find if the promo is now */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminListProducts;