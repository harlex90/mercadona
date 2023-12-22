import moment from 'moment';
import usePromos from '../hooks/usePromos';
import useProducts from '../hooks/useProducts';
import { groupBy } from 'lodash';
import findMaxPromo from '../assets/utils/findMaxPromo';
import ItemCard from './ItemCard';


const ListPromos = () => {
    const { products } = useProducts();
    const { promos: allPromos } = usePromos();


    const now = Date.now() / 1000; // TODO remove /1000 when backend fixed
    const validPromos = allPromos.filter((prom) => {
        return (prom.start_date < now && prom.end_date > now)
    });

    const promosByProducts = groupBy(validPromos, (promo) => promo.product_id);
    const productsPromos = Object.keys(promosByProducts).map((key) => {
       const promosByProduct = promosByProducts[key];
       const betterDiscount = findMaxPromo(promosByProduct);
       return betterDiscount;
    });

    const items = [];
    productsPromos.forEach((promo) => {
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
            id: product.id,
        })
    });

    return(
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
            {items.map((product) => <li key={product.id} style={{listStyle: "none"}}><ItemCard product={product} /></li>)}
        </div>
    )
}

export default ListPromos;
