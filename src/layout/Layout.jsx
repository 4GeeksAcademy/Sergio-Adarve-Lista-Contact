import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importar las vistas
import Contacts from "../views/Contacts.jsx";
import AddContact from "../views/AddContact.jsx";
import EditContact from "../views/EditContact.jsx";

// Importar el contexto
import injectContext from "../store/appContext.jsx";

// Crear el componente principal
const Layout = () => {
    // Utilizar la variable de entorno VITE_BASENAME si está definida
    const basename = import.meta.env.VITE_BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Routes>
                    {/* Rutas de la aplicación */}
                    <Route path="/" element={<Contacts />} />
                    <Route path="/addContact" element={<AddContact />} />
                    <Route path="/editContact/:id" element={<EditContact />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

// Exportar el Layout con el contexto inyectado
export default injectContext(Layout);
