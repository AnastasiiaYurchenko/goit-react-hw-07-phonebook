export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  if (state.filter) {
    const normalizedFilter = state.filter.toLowerCase();
    const visibleContacts = state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  } else {
    return state.contacts.items;
  }
};
