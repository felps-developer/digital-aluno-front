import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useNavigate } from "react-router-dom";

import { Button } from 'primereact/button';


const Contrato = () => {
    const navigate = useNavigate();

    const fakeData = {
        titulo: "Contrato 1",
        link: "www.google.com",
    };

    return (
        <>
            <div class="flex surface-100 p-2 m-2">
                <div class="w-6  font-bold p-1 flex align-items-center ">{fakeData.titulo}</div>
                <div class="w-1  font-bold p-1 flex align-items-center justify-content-center"> <Button label="Ver" severity="help" rounded className="w-full" /><a href={fakeData.link}></a></div>
            </div>
        </>
    );
}

export default Contrato;