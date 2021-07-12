import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';
import { Input, Button, Card } from '../index';
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
    <Card width="352px">
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
