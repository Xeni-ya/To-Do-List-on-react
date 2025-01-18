import PropTypes from 'prop-types';
import styles from './listItem.module.css';

function ListItem(props) {

  const { name, color } = props;

  return (
    <div className={styles.item}>
      <input type="checkbox" className="checkbox"></input>
      <label className={styles.label}>{name}</label>
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