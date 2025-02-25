// import { useState, useEffect } from 'react';
import styles from "./content.module.css"
import AddButton from './AddButton';
import ListItem from './ListItem';
import useLocalStorage from '../hooks/useLocalStorage';

function Content() {

  const [items, setItems] = useLocalStorage("toDoList", [])

  const deleteItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id)
    setItems(updatedList)
  }

  return (
    <main className={styles.content}>
      <ul>
        {
          items.map((item) => (
            <ListItem key={item.id} name={item.name} color={item.color} deleteItem={() => deleteItem(item.id)} />
          ))
        }
      </ul>
      <AddButton />
    </main>
  );
}

export default Content;