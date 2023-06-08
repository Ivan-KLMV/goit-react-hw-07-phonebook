import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactListSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    // addContact(state, action) {
    //   state.contacts.push(action.payload);
    // },
    // deleteContact(state, action) {
    //   state.contacts = state.contacts.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
  },
});

export const getContacts = state => state.contacts.contacts;
export const contactList = contactListSlice.reducer;
export const { addContact, deleteContact } = contactListSlice.actions;
