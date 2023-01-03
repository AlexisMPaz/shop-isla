// Routes
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
                <button className="btn" href="#"><Link className="link" to="../categoria/armas">Armas</Link></button>
            </li>
            <li className="nav-item">
                <button className="btn" href="#"><Link className="link" to="../categoria/armaduras">Armaduras</Link></button>
            </li>
            <li className="nav-item">
                <button className="btn" href="#"><Link className="link" to="../categoria/accesorios">Accesorios</Link></button>
            </li>
      </ul>
    );
}

export default Categories;
