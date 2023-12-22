import React, { useState } from 'react';
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import caddie from "../assets/caddie.jpg";


const ItemCard = ({ product }) => {
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
                        style={{display:"flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", border: isCardHover ? "1px solid gray" : "none", borderRadius: "10%", overflow: 'hidden'}}
                        onMouseEnter={handleMouseEnterCard}
                        onMouseLeave={handleMouseLeaveCard}
                        >
                        <a href="#" onClick={onProduct} style={{textDecoration: "none"}}>
                            <img
                                src={product.image ?? caddie}
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

export default ItemCard;
