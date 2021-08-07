import { useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (username, age) => {
		setUsersList((prevUsersList) => {
			return [...prevUsersList, { username, age, id: Math.random().toString() }];
		});
	};

	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</>
	);
}

export default App;
