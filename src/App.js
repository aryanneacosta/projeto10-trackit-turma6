import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./css/GlobalStyle";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Habitos from "./components/Habitos";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                </Routes>
            </BrowserRouter>
        </>

    );
};

export default App;