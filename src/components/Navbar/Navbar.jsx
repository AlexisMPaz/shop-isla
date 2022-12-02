import "./Navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Categories from "./Categories/Categories";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-container">
      <div className="container">
        <button className="btn navbar-brand" href="#">
          <Link to="/"><img className="logo" src="../img/logo.png" alt="Isla de Marea, Tienda de artefactos exóticos" width={224} /></Link>
        </button>

        <div className="d-flex justify-content-around">
          <Categories />
        </div>

        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
