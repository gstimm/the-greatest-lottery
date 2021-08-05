import * as yup from 'yup';

export const ResetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required('This field is required')
    .email('Insert a valid email address'),
});

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .required('This field is required')
    .email('Insert a valid email address'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('This field is required'),
});

export const SignUpSchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  email: yup
    .string()
    .required('This field is required')
    .email('Insert a valid email address'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('This field is required'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match'),
});

export const NewPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('This field is required'),
  newPassword_confirmation: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Password must match'),
});

export const EditProfileSchema = yup.object().shape({
  name: yup.string().nullable().notRequired(),
  email: yup
    .string()
    .nullable()
    .notRequired()
    .email('Insert a valid email address'),
  password: yup.string().nullable().notRequired(),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match'),
});
