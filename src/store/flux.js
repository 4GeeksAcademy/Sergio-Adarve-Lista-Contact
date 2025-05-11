const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            listContacts: []
        },
        actions: {
            createUser: () => {
                fetch("https://playground.4geeks.com/contact/agendas/4geeks-user", {
                    method: "POST"
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(error));
            },

            getInfoContacts: () => {
                fetch("https://playground.4geeks.com/contact/agendas/4geeks-user/contacts", {
                    method: "GET"
                })
                    .then((response) => {
                        if (response.status === 404) {
                            getActions().createUser();
                        }
                        if (response.ok) {
                            return response.json();
                        }
                    })
                    .then((data) => {
                        if (data) {
                            setStore({ listContacts: data.contacts });
                        }
                    })
                    .catch((error) => console.log(error));
            },

            addContactToList: (contact) => {
                const store = getStore();
                setStore({ ...store, listContacts: [...store.listContacts, contact] });
            },

            createContact: (payload) => {
                fetch("https://playground.4geeks.com/contact/agendas/4geeks-user/contacts", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        const actions = getActions();
                        actions.addContactToList(data);
                    })
                    .catch((error) => console.log(error));
            },

            deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/4geeks-user/contacts/${id}`, {
                    method: "DELETE"
                })
                    .then((response) => {
                        if (response.ok) {
                            const store = getStore();
                            const updatedContacts = store.listContacts.filter(contact => contact.id !== id);
                            setStore({ listContacts: updatedContacts });
                        } else {
                            console.log("Error deleting contact");
                        }
                    })
                    .catch((error) => console.log(error));
            },

            editContact: (id, contact) => {
                fetch(`https://playground.4geeks.com/contact/agendas/4geeks-user/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                    .then((data) => {
                        if (data) {
                            const store = getStore();
                            const updatedList = store.listContacts.map(c => c.id == id ? data : c);
                            setStore({ listContacts: updatedList });
                        }
                    })
                    .catch((error) => console.log(error));
            }
        }
    };
};

export default getState;
