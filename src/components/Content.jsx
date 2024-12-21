import ListItem from './components/ListItem';
import React from 'react';

function Content() {
  return (
    <React.Fragment>
      <ListItem name="Посмотреть урок" />
      <ListItem name="Позаниматься йогой" />
      <ListItem name="Написать список покупок" />
    </React.Fragment>
  );
}

export default Content;