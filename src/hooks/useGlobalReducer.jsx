import { useContext, useReducer, createContext } from "react";
import { storeReducer } from "../store/storeReducer";  // Importar el reducer
import { initialStore } from "../store/initialStore";  // Importar el estado inicial

// Crear el contexto para el estado global
const StoreContext = createContext();

// Componente proveedor que pasa el estado global y el dispatch a la aplicación
export function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, initialStore());  // Usar useReducer con el estado inicial

    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

// Hook personalizado para acceder al estado global y dispatch
export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext);
    return { dispatch, store };
}
