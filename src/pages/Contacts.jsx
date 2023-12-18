import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Layout, Wrapper } from 'components/ContactsLayout';

export default function Contacts() {
  return (
    <Layout>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm />
      </Wrapper>
      <Wrapper>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Wrapper>
    </Layout>
  );
};
