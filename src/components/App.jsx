import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout, Wrapper } from './Layout';

export const App = () => {
   return (
    <Layout>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm  />
      </Wrapper>
      <Wrapper>
        <h2>Contacts</h2>
        <Filter />
        <ContactList  />
      </Wrapper>
    </Layout>
  );
};
