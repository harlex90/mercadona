import Entete from "./Entete";
import ListItems from "../components/ListItems";
import useCategories from "../hooks/useCategories";

const Catalogue = () => {
    // const categories = useCategories();

    return(
        <div>
            <Entete />
            {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
            <ListItems />
        </div>
    )
}

export default Catalogue;
