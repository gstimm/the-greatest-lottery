import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { HeaderLogo, Button } from '../index';

import { HeaderDiv, HeaderDivContainer } from './styles';

interface IProps {
  isHomePage?: boolean;
}

const Header: React.FC<IProps> = ({ isHomePage }) => {
  return (
    <HeaderDivContainer>
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
          <Link to="/logout">
            <Button
              type="button"
              fontSize="20px"
              color="#707070"
              icon={FiArrowRight}
            >
              Log out
            </Button>
          </Link>
        </div>
      </HeaderDiv>
    </HeaderDivContainer>
  );
};

export default Header;
