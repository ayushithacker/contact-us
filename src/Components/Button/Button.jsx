import styles from "./Button.module.css";

const Button = ({ text, icon, isOutline, event }) => {
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
