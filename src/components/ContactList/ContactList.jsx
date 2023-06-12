import { ContactListStyled } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/contactListSlice';
import { getFilter } from 'redux/contactsFilterSlice';
import { Contact } from 'components/Contact';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);

  const handleFilterContact = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const visibleContacts = handleFilterContact().sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const noContacts = contacts.length === 0;
  const isContacts = contacts.length > 0;
  const isVisibleContacts = visibleContacts.length > 0;

  return (
    <ContactListStyled>
      {isLoading && noContacts
        ? 'Loading...'
        : isContacts
        ? isVisibleContacts
          ? visibleContacts.map(contact => (
              <Contact key={contact.id} contact={contact} />
            ))
          : 'No matches found'
        : 'Contacts list is empty'}
    </ContactListStyled>
  );
};
