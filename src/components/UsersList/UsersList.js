import styles from "../UsersList/UsersList.module.css";
import Card from "../Card/Card";

function UsersList(props) {
	return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((user) => {
					return (
						<li key={user.id}>
							{user.username} ({user.age} years old)
						</li>
					);
				})}
			</ul>
		</Card>
	);
}

export default UsersList;
