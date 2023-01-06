// React
import React from "react";

// Routes
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Context
import { useChaosModeContext } from "../../context/ChaosModeContext";
import { useCartContext } from "../../context/CartContext";

// Data base Functions
import { createOrder } from "../../assets/firebase";
import { getOrder } from "../../assets/firebase";
import { getProduct, updateProduct } from "../../assets/firebase";

// Toastify
import { toast } from "react-toastify";


const Checkout = () => {

    const { totalPrice, cart, emptyCart } = useCartContext();
    const { chaosMode } = useChaosModeContext();

    const aux = cart;

    aux.forEach(cartProduct => {
        getProduct(cartProduct.id).then(dBProduct => {
            if (dBProduct.stock >= cartProduct.amt) {
                dBProduct.stock -= cartProduct.amt;
                updateProduct(cartProduct.id, dBProduct);
            } else {
                console.log("Faltante de Stock");
                toast.error(`El producto ${dBProduct.name} no posee suficiente stock.`, {
                    position: "top-right",
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                emptyCart();
            };
        });
    });

    const datosFormulario = React.useRef();
    let navigate = useNavigate();

    const consultarFormulario = (e) => {
        e.preventDefault();
        const datForm = new FormData(datosFormulario.current);
        const client = Object.fromEntries(datForm);
        console.log(client);

        if (client.email === client.email2) {
            createOrder(client, totalPrice(), new Date().toISOString()).then(order => {
                getOrder(order.id).then(item => {
                    toast.success(`Gracias por su compra, su código de orden es: ${item.id}`, {
                        position: "top-right",
                        autoClose: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    });
                    emptyCart();
                    e.target.reset();
                    navigate("/");
                });
            });
        } else {
            toast.error(`No se a podido validar su Email, intente nuevamente.`, {
                position: "top-right",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            e.target.reset();
        }


    };

    return (
        <div className={`container ${chaosMode ? 'mainContainerChaos' : 'mainContainer'}`}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="name" pattern="[a-zA-Z0-9 ]+" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="email2" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="tel" className="form-label">Telefono</label>
                    <input type="number" className="form-control" name="tel" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="adress" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="adress" required />
                </div>

                {cart.length === 0 ?
                    <>
                        <p>El carrito se encuentra vacío.</p>
                        <button className='btn btn-warning'><Link className="nav-link" to={'/'}>Volver al inicio</Link></button>
                    </>
                    :
                    <button type="submit" className="btn btn-dark">Finalizar Compra</button>
                }
            </form>
        </div>
    );
};

export default Checkout;
