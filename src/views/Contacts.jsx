import React from "react";
import { useGlobalContext } from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  const { store, actions } = useGlobalContext();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    actions.deleteContact(id);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Contact List</h2>
        <button className="btn btn-success" onClick={() => navigate("/add")}>
          Add new contact
        </button>
      </div>
      {store.contacts.length === 0 ? (
        <div className="alert alert-info">No contacts available</div>
      ) : (
        store.contacts.map((contact) => (
          <div className="card mb-3" key={contact.id}>
            <div className="row g-0 align-items-center">
              <div className="col-md-2 text-center">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="img-fluid rounded-circle m-2"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{contact.name}</h5>
                  <p className="card-text mb-1">
                    <strong>Address:</strong> {contact.address}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Phone:</strong> {contact.phone}
                  </p>
                  <p className="card-text mb-0">
                    <strong>Email:</strong> {contact.email}
                  </p>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <button className="btn btn-outline-primary m-1" title="Edit">
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <button
                  className="btn btn-outline-danger m-1"
                  onClick={() => handleDelete(contact.id)}
                  title="Delete"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Contacts;
