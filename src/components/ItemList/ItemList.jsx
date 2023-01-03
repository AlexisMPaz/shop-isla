// Components
import Item from "../Item/Item";

const ItemList = ({productList}) => {
    return (
        <div className="row">
            {productList.map(product => <Item key={product.id} item={product}/>)}
        </div>
    );
}

export default ItemList;
