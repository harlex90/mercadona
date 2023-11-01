import React, { useState } from 'react';
import { useIsAuthenticated, useSignOut, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts"
import caddie from "../assets/caddie.jpg";
import { ItemCard } from './ListPromos';
import usePromos from '../hooks/usePromos';


// const ItemCard = ({ product }) => {

//     const [description, setDescription] = useState(false);

//     const displayDescription = () => setDescription(!description);

//     const isAuthenticated = useIsAuthenticated();

//     const navigate = useNavigate();

//     const onPromotion = () => {

//         navigate('/admin/promos/create')
//     }

//     const [isHover, setIsHover] = useState(false);

//     const handleMouseEnter = () => {
//       setIsHover(true);
//     };
//    const handleMouseLeave = () => {
//       setIsHover(false);
//     };

//     return(
//         <div style={{display: "flex", flexDirection: "column"}}>
//             <div style={{width: "300px", height:"375px"}}> 
//                 <div style={{display: "flex", justifyContent: "center"}}>
//                     <img
//                         src={caddie}
//                         alt={product.name} 
//                         style={{display: "flex", justifyContent: "center", width: 150, height: 150}}
//                     />
//                 </div>
//                 <p style={{display: "flex", justifyContent: "center", fontSize:"20px"}}>{product.name}</p>
//                 <div style={{display: "flex", flexDirection: "column", gap: "15px", fontSize:"20px"}}>
//                     <span id="more" style={{display: description ? "flex" : "none", justifyContent: "center", marginBottom: "0px", fontSize:"15px"}}>{product.description}</span>
//                         <div style={{display: "flex", justifyContent: "center"}}>
//                             <button
//                             type="button"
//                             style={{display: "flex", justifyContent: "center", alignItems: "center", height: "20px", border: "none", backgroundColor: "white", fontSize: "30px", border: isHover ? "1px solid gray" : "none"}}
//                             onClick= {displayDescription}
//                             onMouseEnter={handleMouseEnter}
//                             onMouseLeave={handleMouseLeave}
                            
//                             >
//                             {description ? "-" : "+"}
//                             </button>
//                         </div>
                        
//                         <div style={{display: "flex", justifyContent: "center"}}>
//                             <p style={{margin: "1px"}}>{product.price} €</p>
//                         </div>

//                         <div style={{display: "flex", justifyContent: "center"}}>
//                         {isAuthenticated() && <button type='button'><a href="#" onClick={onPromotion} style={{textDecoration: "none"}}>Promotion</a></button>}
//                         </div>
                        
                        
        
//                 </div>
                
//             </div>
//         </div>
        
//     )
// }

const ListItems = ({ selectedCategory }) => {
    const { products } = useProducts();
    const { promos } = usePromos();

    const filteredProducts = selectedCategory ? 
        products.filter((product) => product.category_id === selectedCategory)
        : products;

    const items = [];
    filteredProducts.forEach((product) => {
        const promo = promos.find((prom) => {
            return (product.id === prom.product_id)
        })

        items.push({
            ...promo,
            ...product,
            new_price: product.price * (promo?.discount ?? 1),
            image: caddie,
            id: product.id,
        })
    });

    const isAuthenticated = useIsAuthenticated();

    const navigate = useNavigate();
    
    const onPlus = () => {
        navigate('/admin/products/create')
    }
    

    return(
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {items.map((product) => <ItemCard key={product.id} product={product} />)}
            <div style={{display: "flex", justifyContent: "center", width: "300px", alignItems: "center"}}>
                {isAuthenticated() && <button type='button' style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "80px", backgroundColor: "white", width: "80px", height: "80px", borderRadius: "50%", border: "2px solid black"}}><a href="#" onClick={onPlus} style={{textDecoration: "none"}}>+</a></button>}
            </div>
        </div>
    )
}

export default ListItems;