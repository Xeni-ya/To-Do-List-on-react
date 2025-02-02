import { useState, useEffect } from 'react';
import styles from "./content.module.css"
import AddButton from './AddButton';
import ListItem from './ListItem';

function Content() {

  // const items = [
  //   {
  //     id: 1,
  //     name: "Посмотреть урок",
  //     isCheked: false,
  //     color: "red"
  //   },
  //   {
  //     id: 2,
  //     name: "Позаниматься йогой",
  //     isCheked: true,
  //     color: "orange"
  //   },
  //   {
  //     id: 3, name: "Написать список покупок",
  //     isCheked: false,
  //     color: "pink"
  //   }
  // ]

  const [items, setItems] = useState([])

  useEffect(
    () => {
      setItems(JSON.parse(localStorage.getItem("toDoList")))
    }, []
  )

  return (
    <main className={styles.content}>
      <ul>
        {
          items.map((item) =>
            <ListItem key={item.id} name={item.name} color={item.color} />
          )
        }
      </ul>
      <AddButton />
    </main>
  );
}

export default Content;