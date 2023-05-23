
import React from 'react';
import axios from "axios";

const useProducts = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        axios.get('/products').then((res) => {
            setProducts(res.data);
            setIsLoading(false);
        })
    }, []);

    return {
        products,
        isLoading,
    };
}

export default useProducts;