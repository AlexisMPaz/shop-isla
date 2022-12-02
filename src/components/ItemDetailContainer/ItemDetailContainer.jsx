import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css";
import consultBDD from "../../assets/functions";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        consultBDD("../json/products.json").then(products => {
            const prod = products.find(product => product.id === parseInt(id));
            setProduct(prod);
        })
    }, []);

    return (
        <>
            <ItemDetail item={product}/>
        </>
    );
}

export default ItemDetailContainer;
