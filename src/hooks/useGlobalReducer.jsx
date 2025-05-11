import React, { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    default:
      return state;
  }
};

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Mike Anamendolla",
      address: "5842 Hillcrest Rd",
      phone: "(870) 288-4149",
      email: "mike.ana@example.com",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ]
};

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  const actions = {
    addContact: (contact) => dispatch({ type: "ADD_CONTACT", payload: contact }),
    deleteContact: (id) => dispatch({ type: "DELETE_CONTACT", payload: id })
  };

  return (
    <GlobalContext.Provider value={{ store, actions }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
