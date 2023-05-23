import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Entete from "./Entete";

const AdminListCategories = () => {
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        axios.get('/categories').then((res) => {
            setCategories(res.data)
        })
    }, []);

    const navigate = useNavigate();
    const onAddCategory = () => {
        navigate('/admin/categories/create')
    };

    return (
        <div>
            <Entete />
            <button onClick={onAddCategory}>Add category</button>
            {categories.map((category) => (
                <div>
                    <p>name: {category.name}</p>
                </div>
            ))}
        </div>
    )
}

export default AdminListCategories;