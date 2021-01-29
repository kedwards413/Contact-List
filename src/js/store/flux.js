const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
			currentContact: null
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
			editContact: contactToEdit => {
				const tempStore = getStore();
				console.log(contactToEdit);
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contactToEdit.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contactToEdit)
				})
					.then(response => response.json())
					.then(() => {
						getActions().getInitialData();
					});
			},
			getContact: contactId => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contactId}`)
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						//setStore({ characters: responseAsJson.results });
						setStore({ currentContact: responseAsJson });
						console.log(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			addContact: contactToAdd => {
				const tempStore = getStore();
				console.log(contactToAdd);
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contactToAdd)
				})
					.then(response => response.json())
					.then(() => {
						getActions().getInitialData();
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
