import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container itemListContainer">
            <p>{greeting}</p>
        </div>
    );
}

export default ItemListContainer;
