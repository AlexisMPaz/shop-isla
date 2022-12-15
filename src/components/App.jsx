import "./App.css";

// Router Dom
import { BrowserRouter } from "react-router-dom";

// Context
import { ChaosModeProvider } from "../context/ChaosModeContext";

// Components
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <ChaosModeProvider>

          <Navbar />
          <Main />

        </ChaosModeProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
