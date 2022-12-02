import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Navbar/Navbar"
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Welcome from "./Welcome/Welcome";
import Cart from "./Cart/Cart";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Welcome/>}/>
        </Routes>

        <main className="container mainContainer">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/artefacto/:id" element={<ItemDetailContainer />} />
            <Route path="/categoria/:category" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Cart/>}/>
          </Routes>
        </main>


      </BrowserRouter>

    </>
  );
}

export default App;
