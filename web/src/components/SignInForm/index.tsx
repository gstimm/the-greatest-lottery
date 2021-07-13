import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button, Card } from '../index';
import { SignInSchema } from '../../utils/schemas';
import { ResetPasswordLinkStyle, FormStyle } from './styles';
import { AuthState, loginRequest } from '../../store/ducks/auth';
import { ApplicationStore } from '../../store';

interface IFormInput {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const { error } = useSelector<ApplicationStore, AuthState>(
    state => state.Auth,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onChange',
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    dispatch(loginRequest(data.email, data.password));

    console.log(data, 'ok');
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <Card width="352px">
      <FormStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'This is a required field',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
          <Input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'This is a required field',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
          <ResetPasswordLinkStyle>
            <Link to="/reset-password">
              <Button type="button" fontSize="17px" color="#C1C1C1">
                I forgot my password
              </Button>
            </Link>
          </ResetPasswordLinkStyle>
          <Button
            type="submit"
            icon={FiArrowRight}
            color="#b5c401"
            fontSize="35px"
            margin="43px auto"
          >
            Log In
          </Button>
        </form>
      </FormStyle>
    </Card>
  );
};

export default SignInForm;
