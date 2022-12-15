import { Link } from "react-router-dom";

import { useChaosModeContext } from "../../context/ChaosModeContext";

const Cart = () => {

    const {chaosMode} = useChaosModeContext();

    return (
        <div className={`${chaosMode ? 'mainContainerChaos' : 'mainContainer'}`}>
            <h2 className="mt-5 text-center">Carrito fuera de servicio, disculpe las molestias.</h2>

            <div className="d-flex justify-content-center align-content-center">
                <img src="../img/cart.png" alt="" />
            </div>

            <div className="d-flex justify-content-center mt-5">
                <button className="btn btn-dark"><Link className="link" to="../checkout">Continuar con la Compra</Link></button>
            </div>
        </div>
    );
}

export default Cart;
