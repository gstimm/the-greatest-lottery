import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';
import { Input, Button } from '../index';
import Card from '../UI/Card';
import { FormStyle } from './styles';

interface IFormInput {
  email: string;
}

const ResetPasswordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <Card>
      <FormStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            required
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <Button
            type="submit"
            icon={FiArrowRight}
            color="#b5c401"
            fontSize="35px"
            margin="43px auto"
          >
            Send link
          </Button>
        </form>
      </FormStyle>
    </Card>
  );
};

export default ResetPasswordForm;
