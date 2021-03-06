import styles from "./Button.module.css";

function Button(props) {
	return (
		<button
			className={styles.button}
			type={props.type || "button"}
			onClick={props.handleClick}
		>
			{props.children}
		</button>
	);
}

export default Button;
