import {useState} from "react";

const ItemCount = () => {
    const [number, setNumber] = useState(1);

    const add = () => {
        if (number <10)
        setNumber(number + 1);
    }

    const subtract = () => {
        if (number >1) 
        setNumber(number - 1);
    }

    return (
        <>
            <button className="btn btn-dark" onClick={() => subtract()}>-</button>
            {number}
            <button className="btn btn-dark" onClick={() => add()}>+</button>
            <button className="btn btn-light">Agregar al Carrito</button>
        </>
    );
}

export default ItemCount;
