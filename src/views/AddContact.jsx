import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (id && store.listContacts.length > 0) {
            const currentContact = store.listContacts.find(c => c.id == id);
            if (currentContact) {
                setName(currentContact.name);
                setPhone(currentContact.phone);
                setEmail(currentContact.email);
                setAddress(currentContact.address);
            }
        }
    }, [id, store.listContacts]);

    const guardarContacto = (e) => {
        e.preventDefault();

        if (!name || !phone || !email || !address) {
            alert("Please fill in all fields.");
            return;
        }

        const payload = {
            name,
            phone,
            email,
            address,
            agenda_slug: "4geeks-user"
        };

        if (id) {
            actions.editContact(id, payload);
            alert("Contact updated successfully!");
        } else {
            actions.createContact(payload);
            alert("Contact created successfully!");
        }

        navigate("/");
    };

    return (
        <div className="container my-5">
            <h1 className="text-center">{id ? "Edit Contact" : "Add New Contact"}</h1>

            <form className="container" onSubmit={guardarContacto}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">{id ? "Update" : "Save"}</button>
            </form>

            <div className="mt-3">
                <Link to="/" className="btn btn-link">← Back to Contacts</Link>
            </div>
        </div>
    );
};

export default AddContact;
