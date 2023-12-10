import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ErrMessage,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/fetchingData';
import { selectContacts } from 'redux/selectors';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'To short')
    .max(15, 'To long')
    .required('* This field required'),
  phone: Yup.number().required('* This field required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = objContact => {
    if (contacts.some(contact => contact.name === objContact.name)) {
      alert(`${objContact.name} is already in the phone book`);
      return;
    }
    return dispatch(addContact(objContact));
  };
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <Field type="text" name="name" placeholder="Enter name..."></Field>
        <ErrMessage component="span" name="name" />

        <StyledLabel htmlFor="name">Number</StyledLabel>
        <Field
          type="tel"
          name="phone"
          placeholder="Enter phone number..."
        ></Field>
        <ErrMessage component="span" name="phone" />

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
