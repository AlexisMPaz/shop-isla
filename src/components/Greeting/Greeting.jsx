
import { useChaosModeContext } from "../../context/ChaosModeContext";

const Greeting = ({inCategory}) => {

    const {chaosMode} = useChaosModeContext();

    if (!inCategory) {
        return (
            <div className={`container ${chaosMode ? 'mainContainerChaos' : 'mainContainer'}`}>
                <h1 className="greetingTitle text-center mb-4">Bienvenido Exiliado!</h1>
    
                <p className="greetingText text-center">Isla de Marea es una tienda ubicada en Rogue Harbour, lejos de molestos ojos Templarios. Nos especializamos en la adquisición y venta de replicas de artefactos históricos de gran poder.</p>
    
                <p className="greetingText text-center">Nuestro inventario cambia constantemente asi que no dudes en pasarte seguido si no encuentras lo que buscas, si necesitas algo un miembro del gremio puede prestarte sus servicios, por un módico precio.</p>
                
            </div>
        );
    }
};

export default Greeting;
