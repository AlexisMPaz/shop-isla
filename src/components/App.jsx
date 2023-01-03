// Style
import "./App.css";
import "react-toastify/dist/ReactToastify.css"

// Router Dom
import { BrowserRouter } from "react-router-dom";

// Context
import { ChaosModeProvider } from "../context/ChaosModeContext";

// Components
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main";
import Footer from "./Footer/Footer";


// Toastify
import { ToastContainer } from "react-toastify";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <ChaosModeProvider>

          <Navbar />
          <Main />
          <Footer/>

          <ToastContainer toastStyle={{ backgroundColor: "rgb(20, 31, 49)", color: "rgb(203, 208, 216)" }} />

        </ChaosModeProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
