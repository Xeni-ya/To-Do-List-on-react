import styles from './addButton.module.css';
import { useState } from 'react';
import React from 'react';

function AddItem({ newItem, setNewItem, addItem }) {

  return (
    <form action="" className={styles.create}>
      <input type="text" name="" id="" required value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button type="submit" onClick={AddItem}>Добавить</button>
    </form>
  );
}

export default AddItem;