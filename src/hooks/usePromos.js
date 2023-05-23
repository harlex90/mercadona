
import React from 'react';
import axios from "axios";

const usePromos = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [promos, setPromos] = React.useState([]);

    React.useEffect(() => {
        axios.get('/promotions').then((res) => {
            setPromos(res.data);
            setIsLoading(false);
        })
    }, []);

    return {
        promos,
        isLoading,
    };
}

export default usePromos;