import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

function ErrorModal(props) {
	return (
		<>
			<div className={styles.backdrop} onClick={props.onClose} />

			<Card className={styles.modal}>
				<header className={styles.header}>
					<h1>{props.title}</h1>
				</header>

				<main className={styles.content}>
					<p>{props.message}</p>
				</main>

				<footer className={styles.actions}>
					<Button handleClick={props.onClose}>Close</Button>
				</footer>
			</Card>
		</>
	);
}

export default ErrorModal;
