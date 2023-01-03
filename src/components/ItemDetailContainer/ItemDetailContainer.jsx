// React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FireBase - DataBase
import { getProduct } from "../../assets/firebase";

// Components
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getProduct(id).then(prod => setProduct(prod));
    }, [])

    return (
        <>
            <ItemDetail item={product}/>
        </>
    );
}

export default ItemDetailContainer;
