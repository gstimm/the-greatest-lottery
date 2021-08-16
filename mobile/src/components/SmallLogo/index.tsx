import React from 'react'
import { LogoContainer, LogoText, GreenBar } from './styles';

const SmallLogo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoText>TGL</LogoText>
      <GreenBar />
    </LogoContainer>
  )
}

export default SmallLogo;
