import PropTypes from 'prop-types';
import styles from './listItem.module.css';
import { useState } from 'react';

function ListItem(props) {

  const [checked, setCheked] = useState(false)

  const handleСheckedState = () => {
    setCheked(!checked)
  }

  return (
    <div className={styles.item} {...props}>
      <input type="checkbox" className={styles.checkbox} checked={checked} onChange={handleСheckedState}></input>
      <label style={checked
        ? { textDecorationLine: 'line-through' }
        : { textDecorationLine: 'none' }}>{props.name}</label>
      <button className={styles.button} onClick={() => props.deleteItem(props.id)}>x</button>
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