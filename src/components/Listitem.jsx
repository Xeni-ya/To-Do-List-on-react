import PropTypes from 'prop-types';
import styles from './listItem.module.css';

function ListItem(props) {
  return (
    <div className="item">
      <input type="checkbox" className="checkbox"></input>
      <label className="label">{props.name}</label>
      <button className="{styles.button}">x</button>
    </div>
  );
}

ListItem.propTypes = {
  checkbox: PropTypes.string,
  label: PropTypes.string,
  button: PropTypes.string,
};

export default ListItem;