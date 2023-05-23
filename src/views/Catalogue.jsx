import Entete from "./Entete";
import ListItems from "../components/ListItems";
import useCategories from "../hooks/useCategories";
import { useState } from "react";

const Catalogue = () => {
    // const categories = useCategories();
    const [selectedCategory, setSelectedCategory] = useState()
    const {categories} = useCategories()

    return(
        <div>
            <Entete />
            {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(parseInt(e.currentTarget.value))}>
                <option value={null}> -- select an option -- </option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id} label={category.name} />
                ))}
            </select>
            <ListItems selectedCategory={selectedCategory}
             />
        </div>
    )
}






    
    


export default Catalogue;
