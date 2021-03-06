import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { HeaderLogo, Button } from '../index';
import { logout } from '../../store/ducks/auth';

import { HeaderDiv, Container } from './styles';

interface IProps {
  isHomePage?: boolean;
}

const Header: React.FC<IProps> = ({ isHomePage }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <HeaderDiv>
        <div className="left-side">
          <HeaderLogo />
          {!isHomePage && (
            <Link to="/home">
              <Button type="button" fontSize="20px" color="#707070">
                Home
              </Button>
            </Link>
          )}
        </div>
        <div className="right-side">
          <Link to="/account">
            <Button type="button" fontSize="20px" color="#707070">
              Account
            </Button>
          </Link>
          <Link to="/">
            <Button
              type="button"
              fontSize="20px"
              color="#707070"
              icon={FiArrowRight}
              onClick={handleLogout}
            >
              Log out
            </Button>
          </Link>
        </div>
      </HeaderDiv>
    </Container>
  );
};

export default Header;
