import SvgIcon from '../SvgIcon/SvgIcon';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactList__item}>
        <p>{name}: </p>
        <p>{number}</p>
        <button onClick={() => onDeleteContact(id)}>
          <SvgIcon id="svg" />
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
