import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/fetchingAuth';
import {
  Button,
  ErrMessage,
  StyledForm,
  StyledLabel,
} from './LoginForm.styled';

const loginFormSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string()
    .min(5, 'Password is too short - should be 5 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('No password provided.'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = objCredentials => {
    return dispatch(logIn(objCredentials));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginFormSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
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

        <Button type="submit">Log In</Button>
      </StyledForm>
    </Formik>
  );
};
