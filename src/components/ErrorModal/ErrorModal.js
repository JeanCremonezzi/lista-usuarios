import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h1>{props.title}</h1>
			</header>

			<main className={styles.content}>
				<p>{props.message}</p>
			</main>

			<footer className={styles.actions}>
				<Button handleClick={props.onClick}>Close</Button>
			</footer>
		</Card>
	);
};

function ErrorModal(props) {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClose} />,
				document.getElementById("backdrop-root")
			)}

			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onClick={props.onClose}
				/>,
				document.getElementById("overlay-root")
			)}
		</>
	);
}

export default ErrorModal;
