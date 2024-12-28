import PropTypes from 'prop-types';
import styles from './listItem.module.css';

function ListItem(props) {
  return (
    <div className={styles.item}>
      <input type="checkbox" className="checkbox"></input>
      <label className="label">{props.name}</label>
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