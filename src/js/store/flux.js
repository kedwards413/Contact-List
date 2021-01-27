const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [
				{
					agenda_slug: "kaela_edwards",
					full_name: "Javon Edwards",
					email: "kaela@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA"
				}
			]
		},
		actions: {
			addContact: () => {
				fetch("https://example.com/profile", {
					method: "POST", // or 'PUT'
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
					})
					.catch(error => {
						console.error("Error:", error);
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
