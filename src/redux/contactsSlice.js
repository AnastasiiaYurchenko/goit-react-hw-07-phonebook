import { createSlice } from '@reduxjs/toolkit';
import { fetchContactas, addContact, deleteContact } from './operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const contactsInitialState = {
  items: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContactas.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContactas.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContactas.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // [fetchContactas.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [addContact.pending](state) {
    //   state.isLoading = true;
    // },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const totalNames = state.items.map(contact => contact.name);

      if (totalNames.includes(action.payload.name)) {
        window.alert(`${action.payload.name} is allready in contacts`);
        return state;
      }
      state.items.push(action.payload);
    },
    // [addContact.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [deleteContact.pending](state) {
    //   state.isLoading = true;
    // },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    // [deleteContact.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  // reducers: {
  // addContact: {
  //   reducer(state, action) {
  //     const totalNames = state.items.map(contact => contact.name);
  //     if (totalNames.includes(action.payload.name)) {
  //       window.alert(`${action.payload.name} is allready in contacts`);
  //       return state;
  //     }
  //     state.items.push(action.payload);
  //   },
  //   prepare(newContact) {
  //     return {
  //       payload: {
  //         id: nanoid(),
  //         name: newContact.name,
  //         number: newContact.number,
  //       },
  //     };
  //   },
  // },
  // deleteContact(state, action) {
  //   const index = state.items.findIndex(
  //     contact => contact.id === action.payload
  //   );
  //   state.items.splice(index, 1);
  // },
  // },
});

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const contactsReducer = contactsSlice.reducer;
