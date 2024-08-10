import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Aqui ficam apenas paginas que possuem header e footer */}
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    {/* Exemplo de rota
                    <Route path="sua-rota" element={seu-componente} /> */}
                </Route>

            </Routes>
        </BrowserRouter>
    );
}
 
export default Paths;