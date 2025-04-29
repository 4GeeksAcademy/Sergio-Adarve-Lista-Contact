import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globales
import Layout from "./layout/Layout";  // Importa el layout con el router
import { StoreProvider } from './hooks/useGlobalReducer';  // Proveedor del estado global

const Main = () => {
    return (
        <React.StrictMode>
            <StoreProvider>
                <Layout /> {/* Ya incluye BrowserRouter internamente */}
            </StoreProvider>
        </React.StrictMode>
    );
};

// Renderiza el componente principal
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
