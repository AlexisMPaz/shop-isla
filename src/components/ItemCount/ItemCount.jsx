import {useState} from "react";

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1);

    const add = () => contador < stock && setContador(contador + 1);

    const subtract = () => contador > 1 && setContador(contador - 1);

    const agregarAlCarrito = () => onAdd(contador);

    return (
        <div className="mt-4 mb-4">
            <button className="me-3 btn btn-warning" onClick={subtract}>-</button>
            {contador}
            <button className="ms-3 btn btn-warning" onClick={add}>+</button>
            <button className="ms-4 btn btn-warning" onClick={agregarAlCarrito}>Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;
