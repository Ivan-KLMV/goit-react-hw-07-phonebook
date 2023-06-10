import { ContactListStyled } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactListSlice';
import { getFilter } from 'redux/contactsFilterSlice';
import { Contact } from 'components/Contact';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleFilterContact = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const visibleContacts = handleFilterContact();

  return (
    <ContactListStyled>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactListStyled>
  );
};
