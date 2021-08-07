import { useState, useRef } from "react";

import styles from "./AddUser.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

function AddUser(props) {
	const [error, setError] = useState();

	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const addUserHandle = (event) => {
		event.preventDefault();

		const enteredUsername = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values).",
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (greater than 0).",
			});
			return;
		}

		props.onAddUser(enteredUsername, enteredAge);
		
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};

	const handleCloseModal = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onClose={handleCloseModal}
				/>
			)}

			<Card className={styles.input}>
				<form onSubmit={addUserHandle}>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" ref={nameInputRef} />

					<label htmlFor="age">Age (Years)</label>
					<input type="number" min="1" id="age" ref={ageInputRef} />

					<Button type="submit" handleClick={addUserHandle}>
						Add User
					</Button>
				</form>
			</Card>
		</>
	);
}

export default AddUser;
