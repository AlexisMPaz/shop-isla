// React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import ItemList from "../ItemList/ItemList";
import Greeting from "../Greeting/Greeting";

// Firebase - DataBase
import { getProducts } from "../../assets/firebase";

// Context
import { useChaosModeContext } from "../../context/ChaosModeContext";

const ItemListContainer = () => {

    const {chaosMode} = useChaosModeContext();

    const [product, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            getProducts().then(products => {
                const productList = products.filter(prod => prod.stock > 0).filter(prod => prod.category === category);
                const productCards = ItemList({ productList });
                setProducts(productCards);
            })

        } else {
            getProducts().then(products => {
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
