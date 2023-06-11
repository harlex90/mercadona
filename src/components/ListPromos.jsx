import React from 'react';
import moment from 'moment';

import usePromos from "../hooks/usePromos";
import useProducts from "../hooks/useProducts";

import caddie from "../assets/caddie.jpg";
import guitare from "../assets/guitare.jpg";
import fauteuil from "../assets/fauteuil.jpg"
import tableau from "../assets/tableau.jpg"

const images = [caddie, guitare, fauteuil, tableau];

const PromoCard = ({ product }) => {
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{border: '1px solid black', borderRadius: '10px', width: "300px", height:"375px"}}> 
                <p style={{display: "flex", justifyContent: "center", fontSize:"20px"}}>{product.name}</p>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img
                        src={product.image}
                        alt={product.name} 
                        style={{display: "flex", justifyContent: "center", width: 150, height: 150}}
                    />
                </div>
                <div style={{display: "flex", flexDirection: "column", marginRight:"10px", gap: "15px", fontSize:"20px"}}>
                    <p style={{display: "flex", justifyContent: "center", marginLeft: "10px", marginRight: "10px", marginBottom: "0px", fontSize:"15px"}}>{product.description}</p>
                    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{fontSize:"12px", color: "red", margin: "0px"}}>En promotion du {product.start_date}</p>
                            <p style={{fontSize:"12px", color: "red", margin: "0px"}}>au {product.end_date}</p>
                        </div>
                        <div>
                            <p style={{textDecoration: "line-through", margin: "1px"}}>{`${product.price} €`}</p>
                            <p style={{margin: "1px", color: "red", fontSize: "25px"}}>{`${product.new_price} €`}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

function randomChoiceImage() {
    return images[Math.floor(images.length * Math.random())];
}

const ListPromos = () => {
    const { promos } = usePromos();
    const { products } = useProducts();

    const promoProducts = React.useMemo(() => {
        if(promos.length < 1 || products.length < 1) return [];

        return promos.map((promo) => {
            const product = products.find(product => promo.product_id === product.id);
            return ({
                id: promo.id,
                description: product.description, 
                image: randomChoiceImage(), 
                name: product.name,
                category_id: product.category_id,
                price: product.price,
                new_price: parseFloat((product.price * promo.discount).toFixed(2)),
                start_date: moment(promo.start_date).format('LL'),
                end_date: moment(promo.end_date).format('LL'),
            });
        });
    }, [promos, products]);

    return(
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px"}}>
            {promoProducts.map((product) => <PromoCard key={product.id} product={product} />)}
        </div>
    )
}

export default ListPromos;
