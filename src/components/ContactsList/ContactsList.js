import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};
