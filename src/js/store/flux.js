const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			deleteContact: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, { method: "DELETE" })
					.then(response => response.json())
					.then(response => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kaela_edwards")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								// Read the response as json.
								return response.json();
							})
							.then(function(responseAsJson) {
								setStore({ contacts: responseAsJson });
							})
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					});
			},
			editContact: editedContact => {
				editedContact.agenda_slug = "kaela_edwards";

				fetch(`https://assets.breatheco.de/apis/fake/contact/contact/${editedContact.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(editedContact)
				})
					.then(response => response.json())
					.then(response => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kaela_edwards")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								// Read the response as json.
								return response.json();
							})
							.then(function(responseAsJson) {
								setStore({ contacts: responseAsJson });
							})
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					});
			},

			addContact: newContact => {
				const tempStore = getStore();
				const updatedContacts = tempStore.contacts.concat(newContact);
				setStore({ contacts: updatedContacts });

				newContact.agenda_slug = "kaela_edwards";

				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newContact)
				})
					.then(response => response.json())
					.then(response => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kaela_edwards")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								// Read the response as json.
								return response.json();
							})
							.then(function(responseAsJson) {
								setStore({ contacts: responseAsJson });
							})
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					});
			},
			getInitialData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kaela_edwards")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						//setStore({ characters: responseAsJson.results });
						setStore({ contacts: responseAsJson });
						console.log(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};

export default getState;
