import { useState } from "react";

import styles from "./AddUser.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

function AddUser(props) {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [error, setError] = useState();

	const addUserHandle = (event) => {
		event.preventDefault();

		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values).",
			});
			return;
		}

		if (+age < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (greater than 0).",
			});
			return;
		}

		props.onAddUser(username, age);

		setUsername("");
		setAge("");
	};

	const usernameHandler = (event) => {
		setUsername(event.target.value);
	};

	const ageHandler = (event) => {
		setAge(event.target.value);
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
					<input
						type="text"
						value={username}
						id="username"
						onChange={usernameHandler}
					/>

					<label htmlFor="age">Age (Years)</label>
					<input type="number" value={age} min="1" id="age" onChange={ageHandler} />

					<Button type="submit" handleClick={addUserHandle}>
						Add User
					</Button>
				</form>
			</Card>
		</>
	);
}

export default AddUser;
