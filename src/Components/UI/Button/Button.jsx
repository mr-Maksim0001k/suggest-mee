import styles from "./Button.module.scss";

const Button = ({ BtnElem }) => {
  return (
    <button onClick={BtnElem} className={styles.button}>
      Suggest more
    </button>
  );
};

export default Button;
