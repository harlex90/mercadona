import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";

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
            <div style={{display: "flex", alignItems: "center", marginTop: "70px", marginBottom: "70px"}}>
                <TitleAndLogo/>
                <div style={{display: "flex", justifyContent: "center", flex: "2 1 10%"}}>
                    <Navbar/>
                </div>
                <div style={{display: "flex", flex: "1 1 10%"}}>

                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", marginLeft: "10%"}}>
                <div>
                    <h3>Créer une nouvelle catégorie</h3>
                </div>
                <div>
                    <input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} type='text' placeholder="nom de la catégorie"/>
                    <button onClick={onSubmit}>Entrer</button>
                </div>
            </div>
        </div>
    )
}

export default AdminCreateCategories;