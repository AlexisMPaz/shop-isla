import {useState} from "react";

const ItemCount = ({stock}) => {
    const [number, setNumber] = useState(1);

    const add = () => {
        if (number < stock)
        setNumber(number + 1);
    }

    const subtract = () => {
        if (number >1) 
        setNumber(number - 1);
    }

    return (
        <div className="mt-4 mb-4">
            <button className="me-3 btn btn-warning" onClick={() => subtract()}>-</button>
            {number}
            <button className="ms-3 btn btn-warning" onClick={() => add()}>+</button>
            <button className="ms-4 btn btn-warning">Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;
