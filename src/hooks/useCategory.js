import axios from "axios";
import React from "react";

const useCategory = (id) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [category, setCategory] = React.useState(null);

    React.useEffect(() => {
        axios.get(`/categories/${id}`).then((res) => {
            setCategory(res.data);
            setIsLoading(false);
        })
    }, []);

    return {
        category,
        isLoading,
    };
}

export default useCategory;