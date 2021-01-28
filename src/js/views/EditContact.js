import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const EditContact = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [editedContact, setEditedContact] = useState({
		full_name: "",
		email: "",
		id: "",
		phone: "",
		address: "",
		agenda_slug: "kaela_edwards"
	});

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit a contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							name="full_name"
							onChange={event => setEditedContact({ ...editedContact, full_name: event.target.value })}
							value={editedContact.full_name}
							className="form-control"
							placeholder="Full Name"
						/>
						{/* add onChange for react and value's for controlled input --> */}
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							onChange={event => setEditedContact({ ...editedContact, email: event.target.value })}
							value={editedContact.email}
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							name="phone"
							onChange={event => setEditedContact({ ...editedContact, phone: event.target.value })}
							value={editedContact.phone}
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							name="address"
							onChange={event => setEditedContact({ ...editedContact, address: event.target.value })}
							value={editedContact.address}
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						onClick={() => {
							actions.editContact(editedContact);
							history.push("/");
						}}
						type="button"
						className="btn btn-primary form-control">
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
