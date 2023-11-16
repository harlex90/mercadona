import React from 'react';
import axios from "axios";

const useProduct = (id) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [product, setProduct] = React.useState();

    React.useEffect(() => {
        axios.get(`/products/${id}`).then((res) => {
            setProduct(res.data);
            setIsLoading(false);
        })
    }, []);

    return {
        product,
        isLoading,
    };
}

export default useProduct;