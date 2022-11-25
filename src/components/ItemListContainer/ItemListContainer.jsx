import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import consultBDD from "../../assets/functions.js";

const ItemListContainer = () => {

    const [product, setProducts] = useState([]);

    useEffect(() => {
        consultBDD().then(productList => {
            const productCards = ItemList({productList});
            setProducts(productCards);
        })
    }, []);

    return (
        <div className="container itemListContainer">
            {product}
        </div>
    )
}

export default ItemListContainer;
