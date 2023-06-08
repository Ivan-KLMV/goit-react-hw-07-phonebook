import { ContactListStyled } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactListSlice';
import { getFilter } from 'redux/contactsFilterSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log('log ContactList', contacts);

  const handleFilterContact = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const visibleContacts = handleFilterContact();
  // const visibleContacts = contacts;
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ContactListStyled>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:<span>{contact.number}</span>
          <button
            id={contact.id}
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ContactListStyled>
  );
};
