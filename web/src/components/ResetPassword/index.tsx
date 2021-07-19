import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { ResetPasswordForm, Button } from '../index';

import { Container } from './styles';

const ResetPassword: React.FC = () => {
  return (
    <Container>
      <h1>Reset password</h1>
      <ResetPasswordForm />
      <Link to="/">
        <Button
          type="button"
          icon={FiArrowLeft}
          color="#707070"
          fontSize="35px"
          margin="43px auto"
        >
          Back
        </Button>
      </Link>
    </Container>
  );
};

export default ResetPassword;
