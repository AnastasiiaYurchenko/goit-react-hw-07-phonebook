import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Layout>
  );
};
