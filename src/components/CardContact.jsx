// src/components/CardContact.jsx
import React from "react";

const CardContact = ({ contact, onDelete, onEdit }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="img-fluid rounded-circle m-2"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            <p className="card-text mb-1">
              <i className="fas fa-map-marker-alt me-2"></i>{contact.address}
            </p>
            <p className="card-text mb-1">
              <i className="fas fa-phone me-2"></i>{contact.phone}
            </p>
            <p className="card-text">
              <i className="fas fa-envelope me-2"></i>{contact.email}
            </p>
          </div>
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => onEdit(contact.id)}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(contact.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContact;
