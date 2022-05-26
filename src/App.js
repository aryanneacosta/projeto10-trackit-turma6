import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./css/GlobalStyle";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
            </BrowserRouter>
        </>

    );
};

export default App;