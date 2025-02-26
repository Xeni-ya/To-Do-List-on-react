import styles from './addButton.module.css';
import { useRef } from 'react';
import React from 'react';

function AddItem({ newItem, setNewItem, addItem }) {

  const ref = useRef()

  const focus = () => {
    ref.current.focus()
  }

  return (
    <form action="" className={styles.create}>
      <input ref={ref} type="text" required value={newItem} onChange={(e) => setNewItem(e.target.value.toUpperCase)} />
      <button type="submit" onClick={addItem}>
        Добавить
      </button>
      <button onClick={focus}></button>
    </form>
  );
}

export default AddItem;