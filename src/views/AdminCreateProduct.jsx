import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";

const AdminCreateProduct = () => {
    const { categories } = useCategories();

    const [inputName, setInputName] = React.useState("");
    const [inputDescription, setInputDescription] = React.useState("");
    const [inputPrice, setInputPrice] = React.useState(0);
    const [inputCategory, setInputCategory] = React.useState();

    const navigate = useNavigate();
    const onSubmit = () => {
        if(!inputCategory) {
            alert("Vous devez choisir une catégorie")
            return;
        }

        axios.post('/products', {
            category_id: inputCategory,
            name: inputName,
            description: inputDescription,
            price: inputPrice
        }).then(() => {
            navigate('/catalogue')
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
                    <h3>
                        Créer un nouveau produit
                    </h3>
                </div>
                <div>
                    <select value={inputCategory} onChange={(e) => setInputCategory(parseInt(e.currentTarget.value))}>
                        <option value={null}> -- select an option -- </option>
                        {categories.map((category) => (
                        <option key={category.id} value={category.id} label={category.name} />
                        ))}
                    </select>
                    <input type="text" value={inputName} onChange={(e) => setInputName(e.currentTarget.value)} placeholder="nom du produit"/>
                    <input type="text" value={inputDescription} onChange={(e) => setInputDescription(e.currentTarget.value)} placeholder="description du produit"/>
                    <input type="number" value={inputPrice} onChange={(e) => setInputPrice(e.currentTarget.value)} placeholder="prix du produit"/>
                    <button onClick={onSubmit}>Entrer</button>
                </div>
            </div>
        </div>
    )
}

export default AdminCreateProduct;