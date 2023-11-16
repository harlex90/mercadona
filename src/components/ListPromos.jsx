import React, { useState } from 'react';
import moment from 'moment';
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

import caddie from "../assets/caddie.jpg";
import guitare from "../assets/guitare.jpg";
import fauteuil from "../assets/fauteuil.jpg"
import tableau from "../assets/tableau.jpg"
import usePromos from '../hooks/usePromos';
import useProducts from '../hooks/useProducts';

export const ItemCard = ({ product }) => {

    const isAuthenticated = useIsAuthenticated();

    const navigate = useNavigate();

    const [description, setDescription] = useState(false);

    const displayDescription = () => setDescription(!description);

    const [isHover, setIsHover] = useState(false);
    const [isCardHover, setIsCardHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };

    const handleMouseEnterCard = () => {
        setIsCardHover(true);
      };

    const handleMouseLeaveCard = () => {
        setIsCardHover(false);
      };

    const onProduct = () => {
        navigate(`/admin/products/${product.id}`)
         }

    const isInPromotion = product.price !== product.new_price;

    return(
        
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{width: "300px", height:"375px"}}> 
                <div style={{display: "flex", justifyContent: "center"}}>
                    {isAuthenticated() && (
                    <button 
                        type='button' 
                        style={{display:"flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", border: isCardHover ? "1px solid gray" : "none", borderRadius: "10%"}}
                        onMouseEnter={handleMouseEnterCard}
                        onMouseLeave={handleMouseLeaveCard}
                        >
                        <a href="#" onClick={onProduct} style={{textDecoration: "none"}}>
                            <img
                                src={product.image}
                                alt={product.name} 
                                style={{width: 150, height: 150}}
                            />
                            <p style={{display: "flex", justifyContent: "center", fontSize:"20px"}}>{product.name}</p>
                        </a>
                    </button>)}
                    {!isAuthenticated() && (
                    <div>
                        <img
                            src={product.image}
                            alt={product.name} 
                            style={{display: "flex", justifyContent: "center", width: 150, height: 150}}
                        />
                        <p style={{display: "flex", justifyContent: "center", fontSize:"20px"}}>{product.name}</p>
        
                    </div>)}
                </div>
                
                
                <div style={{display: "flex", flexDirection: "column", gap: "15px", fontSize:"20px"}}>
                    <span id="more" style={{display: description ? "flex" : "none", justifyContent: "center", marginLeft: "10px", marginRight: "10px", marginBottom: "0px", fontSize:"15px"}}>{product.description}</span>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <span style={{display: "none", fontSize:"12px", color: "red", margin: "0px"}}>En promotion du {product.start_date}</span>
                            <span style={{display: "none", fontSize:"12px", color: "red", margin: "0px"}}>au {product.end_date}</span>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <button
                            type="button"
                            style={{display: "flex", justifyContent: "center", alignItems: "center", height: "20px", backgroundColor: "white", fontSize: "30px", border: isHover ? "1px solid gray" : "none"}}
                            onClick= {displayDescription}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            >
                            {description ? "-" : "+"}
                            </button>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", gap: "15px"}}>
                            <p style={{textDecoration: isInPromotion ? "line-through" : "", margin: "1px"}}>{product.price.toFixed(2)}€</p>
                            {isInPromotion && <p style={{margin: "1px", color: "red", fontSize: "25px"}}>{product.new_price.toFixed(2)}€</p>}
                        </div>
                    
                </div>
                
            </div>
        </div>
    )
}

function randomChoiceImage() {

    const images = [caddie, guitare, fauteuil, tableau]
    return images[Math.floor(images.length * Math.random())];
}

const ListPromos = () => {
    const { products } = useProducts();
    const { promos } = usePromos();

    const items = [];
    promos.forEach((promo) => {
        const product = products.find((prod) => {
            return (prod.id === promo.product_id)
        })
        if(!product) return null;

        const startDate = moment.unix(promo.start_date)
        const endDate = moment.unix(promo.end_date)
        const today = moment()
        const isBetween = today.isSameOrAfter(startDate, 'days') && today.isSameOrBefore(endDate, 'days')
        if(!isBetween) return null

        items.push({
            ...promo,
            ...product,
            new_price: product.price * (1 - promo.discount),
            image: randomChoiceImage(),
            id: promo.id,
        })
    });

    return(
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
            {items.map((product) => <li key={product.id} style={{listStyle: "none"}}><ItemCard product={product} /></li>)}
        </div>
    )
}

export default ListPromos;
