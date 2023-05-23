import axios from "axios";
import React from "react";

const useCategories = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        axios.get('/categories').then((res) => {
            setCategories(res.data);
            setIsLoading(false);
        })
    }, []);

    return {
        categories,
        isLoading,
    };
}

export default useCategories;