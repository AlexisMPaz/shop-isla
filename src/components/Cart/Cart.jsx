// Routes
import { Link } from "react-router-dom";

// Context
import { useChaosModeContext } from "../../context/ChaosModeContext";
import { useCartContext } from "../../context/CartContext";


const Cart = () => {

    const { chaosMode } = useChaosModeContext();
    const { cart, emptyCart, removeItem, totalPrice } = useCartContext();

    return (
        <>
            {cart.length === 0 ?
                <div className={`container ${chaosMode ? 'mainContainerChaos' : 'mainContainer'}`}>
                    <h1 className="mt-5 mb-5 text-center greetingTitle">No se ha ingresado ningun artefacto al carrito.</h1>

                    <div className="mb-5  d-flex justify-content-center">
                        <button className='btn btn-warning'><Link className="nav-link" to={'/'}>Volver al inicio</Link></button>
                    </div>
                </div>
                :
                <div className={`container ${chaosMode ? 'mainContainerChaos' : 'mainContainer'}`}>
                    {cart.map((prod) =>
                        <div className="card border-light p-3 mt-5 mb-5 container artifactCard" key={prod.id} style={{ maxWidth: '540px' }}>
                            <div className="row">
                                <div className="col-4 d-flex align-items-center justify-content-center">
                                    <img src={prod.img} className="img-fluid" alt="..." />
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <h3 className="card-title itemName">{prod.name}</h3>
                                        <p className="card-text itemType">{prod.type}</p>
                                        <p className="card-text">Cantidad: {prod.amt}</p>
                                        <p className="card-text">Precio Unitario: {new Intl.NumberFormat('de-DE').format(prod.price)} X <img src={"https://firebasestorage.googleapis.com/v0/b/react-shop-isla.appspot.com/o/coin.png?alt=media&token=2c8573b0-f81f-4bb2-98a6-2e61e7e9418b"} alt="" /></p>
                                        <p className="card-text">Precio Total: {new Intl.NumberFormat('de-DE').format(prod.price * prod.amt)} X <img src={"https://firebasestorage.googleapis.com/v0/b/react-shop-isla.appspot.com/o/coin.png?alt=media&token=2c8573b0-f81f-4bb2-98a6-2e61e7e9418b"} alt="" /></p>
                                        <button className="btn btn-warning" onClick={() => removeItem(prod.id)}>Remover del Carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <h2 className="text-center">Total a pagar: {new Intl.NumberFormat('de-De').format(totalPrice())} <img src={"https://firebasestorage.googleapis.com/v0/b/react-shop-isla.appspot.com/o/coin.png?alt=media&token=2c8573b0-f81f-4bb2-98a6-2e61e7e9418b"} alt="" /></h2>

                    <div className="m-5 d-flex justify-content-around">
                        <button className='btn btn-warning'><Link className="nav-link" to={'/'}>Continuar comprando</Link></button>
                        <button className="btn btn-warning" onClick={emptyCart}>Vaciar Carrito</button>
                        <button className='btn btn-success'><Link className="nav-link" to={'/checkout'}>Finalizar Compra</Link></button>
                    </div>
                </div>

            }
        </>

    );
}

export default Cart;

