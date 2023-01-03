// Routes
import { Routes, Route } from "react-router-dom";

// Components
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";

const Main = () => {
    return (
        <main className="container">
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/artefacto/:id" element={<ItemDetailContainer />} />
                <Route path="/categoria/:category" element={<ItemListContainer />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </main>
    );
}

export default Main;
