import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";
import ListItems from "../components/ListItems";
import AdminCategoryButtons from "../components/AdminCategoryButtons";
import Footer from "./Footer";
import useCategories from "../hooks/useCategories";
import { useState } from "react";


const Catalogue = () => {
    const [selectedCategory, setSelectedCategory] = useState()
    const {categories} = useCategories()

    return(
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <div style={{display: "flex", alignItems: "center", marginTop: "70px", marginBottom: "70px", width: "100%"}}>
                <TitleAndLogo/>
                <div style={{display: "flex", justifyContent: "center", flex: "2 1 10%"}}>
                    <Navbar/>
                </div>

                <div style={{display: "flex", flex: "1 1 10%", justifyContent: "center", alignItems: "center"}}>
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(parseInt(e.currentTarget.value))}>
                        <option value={null}> -- Tous les produits -- </option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id} label={category.name} />
                        ))}
                    </select>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", margin: "0 5%"}}>
                <ListItems selectedCategory={selectedCategory}/>
            </div>
            <div style={{display: "flex", margin: "0 5%"}}>
                <AdminCategoryButtons/>
            </div>
            <Footer/>
        </div>
    )
}

export default Catalogue;
