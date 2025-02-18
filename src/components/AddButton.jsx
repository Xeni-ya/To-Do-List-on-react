import styles from './addButton.module.css';

function AddButton() {

  const handleClick = (e) => {
    console.log("Hello", e.target)
  }

  const handleClick1 = (name, e) => {
    console.log("Hello" + name, e.target)
  }

  return (
    <button className={styles.button} onClick={(e) => {
      handleClick1("Maria", e)
    }}>
      Добавить
    </button >
  );
}

export default AddButton;