// Info: https://playground.4geeks.com/apis/fake/contact/

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: [],
			contacto: {}
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			mostrarContactos: async agenda_slug => {
				try {
					const response = await fetch(
						"https://playground.4geeks.com/apis/fake/contact/agenda/" + agenda_slug
					);
					const data = await response.json();
					console.log(data);
					setStore({
						contactos: data
					});
				} catch (error) {
					console.error(error);
					return false;
				}
			},

			agregarContactos: async (nombre, email, telefono, direccion) => {
				try {
					let contacto = {
						full_name: nombre,
						email: email,
						agenda_slug: "cecilia_perdomo",
						address: direccion,
						phone: telefono
					};

					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(contacto)
					});
					const data = await response.json();
					console.log(data);
					return true;
				} catch (error) {
					console.error(error);
					return false;
				}
			},

			borrarContacto: async id => {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/" + id, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" }
					});
					const data = await response.json();
					console.log(data);
				} catch (error) {
					console.error(error);
					return false;
				}
			}
		}
	};
};

export default getState;
