// Routes
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <div className="col-12 col-md-6">
            <div className="card border-light mb-3 container artifactCard" >
                <div className="row">
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <img src={item.img} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h4 className="card-title itemName">{item.name}</h4>
                            <p className="card-text itemType">{item.type}</p>
                            <p className="card-text">{new Intl.NumberFormat('de-DE').format(item.price)} X <img src={"https://firebasestorage.googleapis.com/v0/b/react-shop-isla.appspot.com/o/coin.png?alt=media&token=2c8573b0-f81f-4bb2-98a6-2e61e7e9418b"} alt="" /></p>
                            <button className="btn btn-warning"><Link className="nav-link" to={`/artefacto/${item.id}`}>Ver Artefacto</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;

