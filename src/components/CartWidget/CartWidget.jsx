import "./CartWidget.css"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {getItemQuantity} = useCartContext();

    return (
        <div className="d-flex">
            <button className="btn cart"><Link className="link" to={"/carrito"} ><i className="fa-solid fa-cart-shopping"></i></Link></button>
            {getItemQuantity() > 0 && <span>{getItemQuantity()}</span>}
        </div>
    );
}

export default CartWidget;
