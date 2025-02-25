import styles from './addButton.module.css';
import { useState } from 'react';
import React from 'react';

function AddButton() {

  // const handleClick = (e) => {
  //   console.log("Hello", e.target)
  // }

  // const handleClick1 = (name, e) => {
  //   console.log("Hello" + name, e.target)
  // }

  const [newItem, setNewItem] = useState("")
  const [category, setCategory] = useState("")

  return (
    <form action="" className={styles.create}>
      <input type="text" name="" id="" required value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <select name="" id="" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="studies">Учеба</option>
        <option value="home">Домашние дела</option>
      </select>
      <button>Добавить</button>
      <p>{category}</p>
    </form>

  );
}

export default AddButton;