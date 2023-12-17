import { Layout } from 'components/ContactsLayout';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Layout>
      <title>Registration</title>
      <RegisterForm />
    </Layout>
  );
}
