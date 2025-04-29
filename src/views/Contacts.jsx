import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer";  // Importar el hook

import CardContact from "../components/CardContact.jsx";

const Contacts = () => {
    const { store, dispatch } = useGlobalReducer();  // Usar el hook para acceder al estado global y dispatch

    useEffect(() => {
        // Aquí puedes agregar lógica para cargar los contactos si es necesario
        // Por ejemplo, si los contactos vienen de una API:
        // dispatch({ type: 'LOAD_CONTACTS', payload: data });
    }, [dispatch]);

    return (
        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/AddContact">
                    <button className="btn btn-success">Add New contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.contacts && store.contacts.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <CardContact contact={contact} key={index} />
                    ))
                ) : (
                    <p>No contacts available.</p>
                )}
            </ul>
        </div>
    );
};

export default Contacts;
