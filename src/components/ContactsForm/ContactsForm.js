import { Formik } from 'formik';
import {
  FormField,
  Form,
  Button,
  Field,
  ErrorMessage,
} from './ContactsForm.styled';
import { FormWrapper } from './ContactsForm.styled';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field'),
  phone: Yup.string().phone('UA').required('Required field'),
});

export const ContactsForm = () => {
  const dispatch = useDispatch();

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={ContactsSchema}
        onSubmit={(values, actions) => {
          dispatch(addContact(values));
          actions.resetForm();
        }}
      >
        <Form>
          <FormField>
            Name
            <Field name="name" placeholder="Jane Petrenko" />
            <ErrorMessage name="name" component="div" />
          </FormField>

          <FormField>
            Number
            <Field type="tel" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </FormField>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
