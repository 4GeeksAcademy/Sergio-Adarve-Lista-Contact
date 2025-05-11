import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const CardContact = ({ contact }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleDelete = () => {
        actions.deleteContact(contact.id);
    };

    return (
        <div className="card mb-3 shadow">
            <div className="row g-0">
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                    <img 
                        src="https://via.placeholder.com/80" 
                        className="img-fluid rounded-circle m-2"
                        alt="contact avatar"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-text mb-1"><i className="fa fa-envelope me-2"></i>{contact.email}</p>
                        <p className="card-text mb-1"><i className="fa fa-phone me-2"></i>{contact.phone}</p>
                        <p className="card-text"><i className="fa fa-location-dot me-2"></i>{contact.address}</p>
                    </div>
                </div>
                <div className="col-md-2 d-flex flex-column justify-content-center align-items-center gap-2">
                    <button className="btn btn-outline-primary" onClick={() => navigate(`/addContact/${contact.id}`)}>
                        <i className="fa fa-pen"></i>
                    </button>
                    <button className="btn btn-outline-danger" onClick={handleDelete}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardContact;
