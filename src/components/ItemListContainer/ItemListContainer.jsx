import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import consultBDD from "../../assets/functions.js";
import Greeting from "../Greeting/Greeting";

import { useChaosModeContext } from "../../context/ChaosModeContext";

const ItemListContainer = () => {

    const {chaosMode} = useChaosModeContext();

    const [product, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            consultBDD(" ../json/products.json").then(products => {
                const productList = products.filter(prod => prod.stock > 0).filter(item => item.category === category);
                const productCards = ItemList({ productList });
                setProducts(productCards);
            })

        } else {
            consultBDD("./json/products.json").then(products => {
                const productList = products.filter(item => item.stock > 0);
                const productCards = ItemList({ productList });
                setProducts(productCards);
            })
        }

    }, [category]);



    return (
        <>  
            <Greeting inCategory={category}/>

            <div className={`${chaosMode ? 'mainContainerChaos' : 'mainContainer'}`}>
                {product}
            </div>
        </>

    )
}

export default ItemListContainer;
