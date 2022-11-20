import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import Categories from "./Categories/Categories";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-container">
      <div className="container">
        <button className="btn navbar-brand" href="#">
          <img className="logo" src="./logo.png" alt="Isla de Marea, Tienda de artefactos exóticos" width={224} />
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
