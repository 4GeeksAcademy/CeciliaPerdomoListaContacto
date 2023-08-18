import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { ModalEdit } from "../component/ModalEdit.jsx";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});

	const [edit, setEdit] = useState({
		showModal: false,
		id: undefined
	});

	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.mostrarContactos("cecilia_perdomo");
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactos.map((item, id) => (
							<ContactCard
								key={item.id}
								full_name={item.full_name}
								address={item.address}
								phone={item.phone}
								email={item.email}
								onDelete={() => setState({ showModal: true, id: item.id })}
								onEdit={() => setEdit({ showModal: true, id: item.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			{/* Abre el modal para borrar el contacto */}
			<Modal id={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
