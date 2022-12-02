import "./Welcome.css"
const Welcome = () => {
    return (
        <div className="container mainContainer">
            <h1 className="welcomeTitle text-center mb-4">Bienvenido Exiliado!</h1>

            <p className="welcomeText text-center">Isla de Marea es una tienda ubicada en Rogue Harbour, lejos de molestos ojos Templarios. Nos especializamos en la adquisición y venta de replicas de artefactos históricos de gran poder.</p>

            <p className="welcomeText text-center">Nuestro inventario cambia constantemente asi que no dudes en pasarte seguido si no encuentras lo que buscas, si necesitas algo un miembro del gremio puede prestarte sus servicios, por un módico precio.</p>
            
        </div>
    );
}

export default Welcome;
