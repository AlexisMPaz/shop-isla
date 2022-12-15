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
          <Link to="/"><img className="logo" src="../img/logo.png" alt="Isla de Marea, Tienda de artefactos exóticos" width={224} /></Link>
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
