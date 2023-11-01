import React, { useState } from 'react';
import caddie from "../assets/caddie.jpg";
import guitare from "../assets/guitare.jpg";
import fauteuil from "../assets/fauteuil.jpg"
import tableau from "../assets/tableau.jpg"
import usePromos from '../hooks/usePromos';
import useProducts from '../hooks/useProducts';
import moment from 'moment';



// const products = [
//     {
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         id: 1,
//         image: guitare,
//         name: "Guitare bleu",
//         category_id: "1",
//         price: "1000€", 
//         new_price: "700€",
//         start_date: "4 mai 2023",
//         end_date: "1 juin 2023"
//     }, {
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
//         id: 2, 
//         image: caddie, 
//         name: "Guitare rouge",
//         category_id: "2", 
//         price: "1100€",
//         new_price: "750€",
//         start_date: "30 avril 2023",
//         end_date: "12 juin 2023"
//     }, {
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         id: 3,
//         image: fauteuil,
//         name: "Fauteuil",
//         category_id: "3",
//         price: "1000€", 
//         new_price: "700€",
//         start_date: "4 mai 2023",
//         end_date: "1 juin 2023"
//     }, {
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
//         id: 4, 
//         image: tableau, 
//         name: "Tableau",
//         category_id: "4",
//         price: "1100€",
//         new_price: "750€",
//         start_date: "30 avril 2023",
//         end_date: "12 juin 2023"
//     }, {
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         id: 5,
//         image: guitare,
//         name: "Guitare bleu",
//         category_id: "5",
//         price: "1000€", 
//         new_price: "700€",
//         start_date: "4 mai 2023",
//         end_date: "1 juin 2023"
//     }, {
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
//         id: 6, 
//         image: caddie, 
//         name: "Guitare rouge",
//         category_id: "6",
//         price: "1100€",
//         new_price: "750€",
//         start_date: "30 avril 2023",
//         end_date: "12 juin 2023"
//     }
// ];

export const ItemCard = ({ product }) => {
    const [description, setDescription] = useState(false);

    const displayDescription = () => setDescription(!description);

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
    };
   const handleMouseLeave = () => {
      setIsHover(false);
    };

    const isInPromotion = product.price !== product.new_price;

    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{width: "300px", height:"375px"}}> 
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img
                        src={product.image}
                        alt={"product image"} 
                        style={{display: "flex", justifyContent: "center", width: 150, height: 150}}
                    />
                </div>
                <p style={{display: "flex", justifyContent: "center", fontSize:"20px"}}>{product.name}</p>
                <div style={{display: "flex", flexDirection: "column", gap: "15px", fontSize:"20px"}}>
                    <span id="more" style={{display: description ? "inline" : "none", justifyContent: "center", marginLeft: "10px", marginRight: "10px", marginBottom: "0px", fontSize:"15px"}}>{product.description}</span>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <span style={{display: "none", fontSize:"12px", color: "red", margin: "0px"}}>En promotion du {product.start_date}</span>
                            <span style={{display: "none", fontSize:"12px", color: "red", margin: "0px"}}>au {product.end_date}</span>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <button
                            type="button"
                            style={{display: "flex", justifyContent: "center", alignItems: "center", height: "20px", border: "none", backgroundColor: "white", fontSize: "30px", border: isHover ? "1px solid gray" : "none"}}
                            onClick= {displayDescription}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            >
                            {description ? "-" : "+"}
                            </button>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", gap: "15px"}}>
                            <p style={{textDecoration: isInPromotion ? "line-through" : "", margin: "1px"}}>{product.price.toFixed(2)}</p>
                            {isInPromotion && <p style={{margin: "1px", color: "red", fontSize: "25px"}}>{product.new_price.toFixed(2)}</p>}
                        </div>
                    
                </div>
                
            </div>
        </div>
    )
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
            new_price: product.price * promo.discount,
            image: caddie,
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