import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import CardContact from "../components/CardContact";

const Contacts = () => {
    const { store } = useContext(Context);

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fw-bold">Contact List</h1>
                <Link to="/addContact" className="btn btn-success">
                    <i className="fa fa-plus me-2"></i>Add Contact
                </Link>
            </div>

            {store.listContacts.length === 0 ? (
                <div className="alert alert-info text-center">
                    No contacts available.
                </div>
            ) : (
                store.listContacts.map(contact => (
                    <CardContact key={contact.id} contact={contact} />
                ))
            )}
        </div>
    );
};

export default Contacts;
