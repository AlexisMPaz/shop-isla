import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Categories from "./Categories/Categories";
import ButtonDarkMode from "./ButtonDarkMode/ButtonDarkMode";

import { useChaosModeContext } from "../../context/ChaosModeContext";


const Navbar = () => {

  const {chaosMode} = useChaosModeContext();

  return (
    <nav className={`navbar navbar-expand-lg ${chaosMode ? 'navContainerChaos' : 'navContainer'}`}>
      <div className="container">
        <button className="btn navbar-brand" href="#">
          <Link to="/"><img className="logo" src="https://firebasestorage.googleapis.com/v0/b/react-shop-isla.appspot.com/o/logo.png?alt=media&token=92e47ea3-0c34-4a26-924c-04c90664d6d2" alt="Isla de Marea, Tienda de artefactos exóticos" width={224} /></Link>
        </button>

        <div className="d-flex justify-content-around">
          <Categories />
        </div>

        <CartWidget />
        <ButtonDarkMode />
      </div>
    </nav>
  );
}

export default Navbar;
