import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Entete from "./Entete";

const AdminCreateCategories = () => {
    const [inputValue, setInputValue] = React.useState("");

    const navigate = useNavigate();
    const onSubmit = () => {
        axios.post('/categories', {
            name: inputValue,
        }).then(() => {
            navigate('/admin/categories')
        })
    }
    return (
        <div>
            <Entete />
            <p>Create a new category</p>
            <input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} type='text' placeholder="name of the category"/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default AdminCreateCategories;