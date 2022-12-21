import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import { useChaosModeContext } from "../../context/ChaosModeContext";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {

    const {chaosMode} = useChaosModeContext();
    const {addItem} = useCartContext();

    const onAdd = (contador) => {
        addItem(item, contador);
    }

    return (
        <div className={`card mb-3 container ${chaosMode ? 'mainContainerChaos' : 'mainContainer'}`}>
            <div className="row artifactCard">
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <img src={item.img} className="img-fluid" alt="..." />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h3 className="card-title itemName">{item.name}</h3>
                        <p className="card-text itemType">{item.type}</p>
                        <p className="card-text itemInfo">"{item.info}"</p>
                        <p className="card-text">{new Intl.NumberFormat('de-DE').format(item.price)} X <img src={"https://firebasestorage.googleapis.com/v0/b/react-shop-isla.appspot.com/o/coin.png?alt=media&token=2c8573b0-f81f-4bb2-98a6-2e61e7e9418b"} alt="" /></p>
                        <p className="card-text">Stock: {item.stock}</p>
                        <ItemCount inicial = {1} stock={item.stock} onAdd={onAdd}/>
                        <button className="btn btn-success"><Link className="link" to="../carrito" >Ir al Carrito</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
