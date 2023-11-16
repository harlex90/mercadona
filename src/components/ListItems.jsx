import React from 'react';
import useProducts from "../hooks/useProducts"
import { ItemCard } from './ListPromos';
import usePromos from '../hooks/usePromos';
import AdminProductButtons from './AdminProductButtons';

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
            new_price: product.price * (1 - (promo?.discount ?? 0)),
            id: product.id,
        })
    });

    return(
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {items.map((product) => <ItemCard key={product.id} product={product} />)}
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "50px"}}>
                <AdminProductButtons/>
            </div>
        </div>
    )
}

export default ListItems;