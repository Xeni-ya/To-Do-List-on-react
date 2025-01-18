import PropTypes from 'prop-types';
import styles from './listItem.module.css';

function ListItem(props) {
  return (
    <div className={styles.item} {...props}>
      <input type="checkbox" className={styles.checkbox}></input>
      <label className={{ color: props.color }}>{props.name}</label>
      <button className={styles.button}>x</button>
    </div>
  );
}

ListItem.propTypes = {
  div: PropTypes.string,
  checkbox: PropTypes.string,
  name: PropTypes.string,
  button: PropTypes.string,
};

export default ListItem;