import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	const [nombre, setNombre] = useState("");
	const [mail, setMail] = useState("");
	const [direccion, setDireccion] = useState("");
	const [telefono, setTelefono] = useState("");

	const agregar = async e => {
		e.preventDefault();

		if (nombre != "" && mail != "" && direccion != "" && telefono != "") {
			let resp = await actions.agregarContactos(nombre, mail, telefono, direccion);

			if (resp === true) {
				setNombre("");
				setMail("");
				setDireccion("");
				setTelefono("");
			}
		} else {
			console.log("Falta cargar datos");
		}
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={nombre}
							onChange={e => setNombre(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={mail}
							onChange={e => setMail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={telefono}
							onChange={e => setTelefono(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={direccion}
							onChange={e => setDireccion(e.target.value)}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={e => agregar(e)}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
