import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contactListSlice';
import { deleteContact } from 'redux/operations';

export const Contact = ({ contact }) => {
  const isLoading = useSelector(getIsLoading);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <li>
      {contact.name}:<span>{contact.number}</span>
      <button
        className={isLoading & isActive ? 'isLoading' : undefined}
        type="button"
        onClick={() => {
          setIsActive(true);
          handleDelete(contact.id);
        }}
      >
        delete
      </button>
    </li>
  );
};
