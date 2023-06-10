import { FormStyled } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactListSlice';
import { addContact } from 'redux/operations';
import { getAddIsLoading } from 'redux/contactListSlice';

export const ContactForm = () => {
  const isLoading = useSelector(getAddIsLoading);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: e.target[0].value,
      number: e.target[1].value,
    };

    if (contacts.map(contact => contact.name).includes(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    dispatch(addContact(contact));
    e.target.reset();
    [...e.currentTarget].map(item => item.nodeName === 'INPUT' && item.blur());
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={isLoading ? 'addIsLoading' : undefined} type="submit">
        add contact
      </button>
    </FormStyled>
  );
};
