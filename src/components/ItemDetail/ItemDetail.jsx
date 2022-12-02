import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ item }) => {
    return (
        <div className="card  mb-3 container artifactCard" >
            <div className="row">
                <div className="col-4 d-flex align-items-center justify-content-center itemBg">
                    <img src={`../img/artifacts/${item.img}`} className="img-fluid" alt="..." />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h3 className="card-title itemName">{item.name}</h3>
                        <p className="card-text itemType">{item.type}</p>
                        <p className="card-text itemInfo">"{item.info}"</p>
                        <p className="card-text">{new Intl.NumberFormat('de-DE').format(item.price)} X <img src={"../img/coin.png"} alt="" /></p>
                        <p className="card-text">Stock: {item.stock}</p>
                        <ItemCount stock={item.stock}/>
                        <button className="btn btn-success">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
