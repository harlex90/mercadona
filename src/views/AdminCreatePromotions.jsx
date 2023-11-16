import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import usePromos from "../hooks/usePromos";
import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";

const AdminCreatePromos = () => {
    const { products } = useProducts();  
    const { promos }  = usePromos();
    
    const [inputDiscount, setInputDiscount] = React.useState(0);
    const [inputProduct, setInputProduct] = React.useState();
    const [inputStart, setInputStart] = React.useState();
    const [inputEnd, setInputEnd] = React.useState();

    //if product has promo => modify promo
    //if promo = 0%, it is not a promo
    
    const navigate = useNavigate();
    const onSubmit = () => {
        if(!inputProduct) {
            alert("Vous devez choisir un produit")
            return;
        }
        if(!inputDiscount === 0) {
            //promo does not exist
            return;
        }

        axios.post('/promotions', {
            product_id: inputProduct,
            discount: inputDiscount / 100,
            start_date: parseInt(new Date(inputStart).getTime() / 1000), // TODO remove / 1000 after backend fix int type
            end_date: parseInt(new Date(inputEnd).getTime() / 1000), // TODO remove / 1000 after backend fix int type
        }).then(() => {
            navigate('/catalogue')
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
                    <h3>
                        Mettre un produit en promotion
                    </h3>
                </div>
                <div>
                    <select value={inputProduct} onChange={(e) => setInputProduct(parseInt(e.currentTarget.value))}>
                        <option value={null}> -- select an option -- </option>
                        {products.map((product) => (
                        <option key={product.id} value={product.id} label={product.name} />
                        ))}
                    </select>
                    <input type="number" value={inputDiscount} min={1} max={100} step={1} onChange={(e) => setInputDiscount(parseFloat(e.currentTarget.value))} placeholder="pourcentage de réduction"/> %
                    <input type="date" value={inputStart} onChange={(e) => setInputStart(e.currentTarget.value)} />
                    <input type="date" value={inputEnd} onChange={(e) => setInputEnd(e.currentTarget.value)} />
                    <button onClick={onSubmit}>Entrer</button>
                </div>
            </div>
        </div>
    )
}

export default AdminCreatePromos;