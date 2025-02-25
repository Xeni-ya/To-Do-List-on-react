import { useState, useEffect } from 'react';
import styles from "./content.module.css"
import AddItem from './AddItem';
import ListItem from './ListItem';
import useLocalStorage from '../hooks/useLocalStorage';

function Content() {

  const [items, setItems] = useLocalStorage("toDoList", [])
  const [newItem, setNewItem] = useState("")

  const deleteItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id)
    setItems(updatedList)
  }

  const addItem = (e) => {
    e.preventDefault()
    console.log(newItem)
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
      <AddItem newItem={newItem} setNewItem={setNewItem} addItem={addItem} />
    </main>
  );
}

export default Content;