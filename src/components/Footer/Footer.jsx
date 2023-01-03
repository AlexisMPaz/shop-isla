import { Link } from "react-router-dom";

// Context
import { useChaosModeContext } from "../../context/ChaosModeContext";


const Footer = () => {

    const {chaosMode} = useChaosModeContext();


    return (
        <footer className="footer container">
            <div className={`row cols-2 d-flex align-items-center  ${chaosMode ? 'footerContainerChaos' : 'footerContainer'}`}>
                <div className="col-5 m-3">
                    <div>
                        <span>Isla de Marea&copy; 2023 Todos los derechos reservados.</span>
                    </div>
                    <div>
                        <span>Trabajo Final React para </span>
                        <a className="link" href="https://www.coderhouse.com">CoderHouse</a>
                    </div>
                </div>

                <div className="col-1 m-3">
                    <Link to={"/"}><img className="logo" src="https://firebasestorage.googleapis.com/v0/b/react-shop-isla.appspot.com/o/footer-logo.png?alt=media&token=d1e7e6cb-3b30-4d60-82ed-d3ee21b48f2a" alt="" /></Link> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;
