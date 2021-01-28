import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { ContactCard } from "../component/ContactCard.js";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [newContact, setNewContact] = useState({
		full_name: "",
		address: "",
		email: "",
		phone: "",
		agenda_slug: "kaela_edwards"
	});

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<div>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={event => setNewContact({ ...newContact, full_name: event.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={event => setNewContact({ ...newContact, email: event.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={event => setNewContact({ ...newContact, phone: event.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={event => setNewContact({ ...newContact, address: event.target.value })}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							actions.addContact(newContact);
							history.push("/");
						}}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</div>
			</div>
		</div>
	);
};
