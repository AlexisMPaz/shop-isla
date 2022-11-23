import "./CartWidget.css"
const CartWidget = () => {
    return (
        <div className="d-flex">
            <button className="btn cart"><i className="fa-solid fa-cart-shopping"></i></button>
            <p>0</p>
        </div>
    );
}

export default CartWidget;
