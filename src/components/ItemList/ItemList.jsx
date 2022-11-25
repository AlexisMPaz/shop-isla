import Item from "../Item/Item";
//Modificar mi array de Objetos
const ItemList = ({productList}) => {
    return (
        <div className="row">
            {productList.map(product => <Item key={product.id} item={product}/>)}
        </div>
    );
}

export default ItemList;
