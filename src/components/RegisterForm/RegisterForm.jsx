import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/fetchingAuth';
import { Button, ErrMessage, StyledForm, StyledLabel } from 'components/LoginForm/LoginForm.styled';

const registerFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'To short')
    .max(15, 'To long')
    .required('* Please enter a name'),
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string()
    .min(5, 'Password is too short - should be 5 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('No password provided.'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = objCredentials => {
    return dispatch(register(objCredentials));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={registerFormSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledLabel htmlFor="name">Username</StyledLabel>
        <Field type="text" name="name" placeholder="Enter username"></Field>
        <ErrMessage component="span" name="name" />
        
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <Field type="email" name="email" placeholder="Enter email"></Field>
        <ErrMessage component="span" name="email" />

        <StyledLabel htmlFor="password">Password</StyledLabel>
        <Field
          type="password"
          name="password"
          placeholder="Enter password"
        ></Field>
        <ErrMessage component="span" name="password" />

        <Button type="submit">Register</Button>
      </StyledForm>
    </Formik>
  );
};
