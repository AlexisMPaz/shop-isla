import { Link } from "react-router-dom";
const Item = ({ item }) => {

    return (
        <div className="col-12 col-md-6">
            <div className="card border-light mb-3 container artifactCard" >
                <div className="row">
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <img src={`../img/artifacts/${item.img}`} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title itemName">{item.name}</h5>
                            <p className="card-text itemType">{item.type}</p>
                            <p className="card-text">{new Intl.NumberFormat('de-DE').format(item.price)} X <img src={"../img/coin.png"} alt="" /></p>
                            <button className="btn btn-warning"><Link className="nav-link" to={`/artefacto/${item.id}`}>Ver Artefacto</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;

