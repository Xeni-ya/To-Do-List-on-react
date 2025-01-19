import PropTypes from 'prop-types';
import styles from './listItem.module.css';
import { useState } from 'react';

function ListItem(props) {

  const [cheked, setCheked] = useState(false)

  const handleChekedState = () => {
    setCheked(!cheked)
  }

  return (
    <div className={styles.item} {...props}>
      <input type="checkbox" className={styles.checkbox} onClick={handleChekedState}></input>
      <label style={cheked
        ? { textDecorationLine: 'line-through' }
        : { textDecorationLine: 'none' }}>{props.name}</label>
      <button className={styles.button}>x</button>
    </div >
  );
}

ListItem.propTypes = {
  div: PropTypes.string,
  checkbox: PropTypes.string,
  name: PropTypes.string,
  button: PropTypes.string,
};

export default ListItem;