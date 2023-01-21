import SvgIcon from '../SvgIcon/SvgIcon';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactList__item}>
        <p className={css.contactList__name}>{name}: </p>
        <p className={css.contactList__number}>{number}</p>
        <button
          className={css.contactList__deleteBtn}
          onClick={() => onDeleteContact(id)}
        >
          <SvgIcon id="svg" />
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
