import styles from "./AddUser.module.css";
import Card from "../Card/Card";

function AddUser(props) {
	const addUserHandle = (event) => {
		event.preventDefault();
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandle}>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" />

				<label htmlFor="age">Age (Years)</label>
				<input type="number" id="age" />

				<button type="submit">Add User</button>
			</form>
		</Card>
	);
}

export default AddUser;
