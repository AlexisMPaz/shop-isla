import React from "react";
import { useNavigate } from "react-router-dom";

import { useChaosModeContext } from "../../context/ChaosModeContext";

const Checkout = () => {

    const {chaosMode} = useChaosModeContext();

    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        console.log(cliente)
        e.target.reset()
        navigate("/")
    }

    return (
        <div className={`container ${chaosMode ? 'mainContainerChaos' : 'mainContainer'}`}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>

                <div className="mb-3">
                    <label htmlFor="tel" className="form-label">Telefono</label>
                    <input type="number" className="form-control" name="tel" />
                </div>

                <div className="mb-3">
                    <label htmlFor="adress" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="adress" />
                </div>

                <button type="submit" className="btn btn-dark">Finalizar Compra</button>
            </form>
        </div>
    );
}

export default Checkout;
