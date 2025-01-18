import styles from "./content.module.css"
import AddButton from './AddButton';
import ListItem from './ListItem';
import React from 'react';

function Content() {

  const items = ["Посмотреть урок", "Позаниматься йогой", "Написать список покупок"]

  return (
    <React.Fragment className="{styles.content}">
      <ul>
        {
          items.map((item) =>
            <ListItem key={item.id} name={item.name} />
          )
        }
      </ul>
      <AddButton />
    </React.Fragment>
  );
}

export default Content;