import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button } from '../index';
import { ApplicationStore } from '../../store';
import { AuthState } from '../../store/ducks/auth';
import { Container } from './styles';

const AccountData: React.FC = () => {
  const { user } = useSelector<ApplicationStore, AuthState>(
    state => state.Auth,
  );

  // const changePasswordHandler = () => {
  //   toast.warning('This function needs to be implemented.');
  // };

  return (
    <Container>
      <h1>Welcome back, {user.name}.</h1>
      <h2>Details</h2>
      <div>
        <h3>Your Email</h3>
        <p>{user.email}</p>
      </div>
      {/* <Button
        type="button"
        fontSize="16px"
        color="#707070"
        border="1px solid #ccc"
        borderRadius="10px"
        padding="16px"
        onClick={changePasswordHandler}
      >
        Change Password
      </Button> */}
    </Container>
  );
};

export default AccountData;
