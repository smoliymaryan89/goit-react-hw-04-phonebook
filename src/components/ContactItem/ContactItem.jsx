import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li>
    <span>
      {name}: {number}
      <button onClick={() => onDeleteContact(id)} type="button">
        Delete
      </button>
    </span>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
