import badguys from "../../img/badguys.jpg"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
				  name: "Dave Bradley",
				  address: "47568 NW 34ST, 33434 FL, USA",
				  phone: "7864445566",
				  email: "dave@gmail.com",
				  img: badguys,
				},
				
			  ],
			},
		actions: {
			// Use getActions to call a function within a fuction
			addContact: (contact) => {
				let store = getStore();
				let newContacts = [...getStore().contacts, contact];
				setStore({ contacts: newContacts });
			  },
			  delContact: (index) => {
				let newContacts = [...getStore().contacts];
				newContacts.splice(index, 1);
				setStore({ contacts: newContacts });
			  },
			  updateContact: (data, index) => {
				let newContacts = [...getStore().contacts];
				newContacts[index] = {
				  ...data,
				  img: badguys,
				};
				setStore({ contacts: newContacts });
			}
		}
	};
};

export default getState;