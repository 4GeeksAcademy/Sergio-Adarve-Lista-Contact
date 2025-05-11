import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalReducer";

const AddContact = () => {
  const { actions } = useGlobalContext(); // ✅ Este es el contexto correcto
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      ...formData,
      id: Date.now()
    };
    actions.addContact(newContact);
    navigate("/contacts");
  };

  return (
    <div className="container mt-4">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
          />
        </div>

        <div className="mb-3">
          <label>Phone:</label>
          <input
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Address:</label>
          <input
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-success" type="submit">
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
