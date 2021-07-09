import React from 'react';

import { LogoDiv } from './styles';

const HeaderLogo: React.FC = () => {
  return (
    <LogoDiv>
      <h1>TGL</h1>
      <div className="bottom-bar" />
    </LogoDiv>
  );
};

export default HeaderLogo;
