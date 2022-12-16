import { Link } from "react-router-dom";

import { useChaosModeContext } from "../../context/ChaosModeContext";

import { useCartContext } from "../../context/CartContext";


const Cart = () => {

    const { chaosMode } = useChaosModeContext();
    const { cart, emptyCart, removeItem, totalPrice } = useCartContext();

    return (
        <div className={`container ${chaosMode ? 'mainContainerChaos' : 'mainContainer'}`}>
            {cart.length === 0 ?
                <>
                    <h1 className="mt-5 mb-5 text-center greetingTitle">No se ha elegido ningun artefacto.</h1>

                    <div className="mb-5  d-flex justify-content-center">
                        <button className='btn btn-primary'><Link className="nav-link" to={'/'}>Continuar comprando</Link></button>
                    </div>

                </>
                :
                <>
                    {
                        cart.map(prod =>

                            <div className="card border-light p-3 mt-5 mb-5 container artifactCard" >
                                <div className="row">
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <img src={`../img/artifacts/${prod.img}`} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body">
                                            <h3 className="card-title itemName">{prod.name}</h3>
                                            <p className="card-text itemType">{prod.type}</p>
                                            <p className="card-text">Cantidad: {prod.amt}</p>
                                            <p className="card-text">Precio Unitario: {new Intl.NumberFormat('de-DE').format(prod.price)} X <img src={"../img/coin.png"} alt="" /></p>
                                            <p className="card-text">Precio Total: {new Intl.NumberFormat('de-DE').format(prod.price * prod.amt)} X <img src={"../img/coin.png"} alt="" /></p>
                                            <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )}



                    
                    <div className="m-5 d-flex justify-content-around">
                        <h2 className="text-center  ">Total a pagar: {new Intl.NumberFormat('de-De').format(totalPrice())} <img src={"../img/coin.png"} alt="" /></h2>
                        <button className='btn btn-primary'><Link className="nav-link" to={'/'}>Continuar comprando</Link></button>
                        <button className='btn btn-success'><Link className="nav-link" to={'/checkout'}>Finalizar Compra</Link></button>
                        <button className="btn btn-warning" onClick={emptyCart}>Vaciar Carrito</button>
                    </div>

                </>
            }
        </div>
    );
}

export default Cart;
