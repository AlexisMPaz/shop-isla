import "./CartWidget.css"
import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <div className="d-flex">
            <button className="btn cart"><Link className="link" to={"/carrito"} ><i className="fa-solid fa-cart-shopping"></i></Link></button>
            <p>0</p>
        </div>
    );
}

export default CartWidget;
