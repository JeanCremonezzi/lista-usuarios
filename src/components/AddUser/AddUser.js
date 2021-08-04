import { useState } from "react";

import styles from "./AddUser.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

function AddUser(props) {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");

	const addUserHandle = (event) => {
		event.preventDefault();

		if (username.trim().length === 0 || age.trim().length === 0) {
			return;
		}
		
		if (+age < 1) {
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

	return (
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
				<input type="number" value={age} id="age" onChange={ageHandler} />

				<Button type="submit" handleClick={addUserHandle}>
					Add User
				</Button>
			</form>
		</Card>
	);
}

export default AddUser;
