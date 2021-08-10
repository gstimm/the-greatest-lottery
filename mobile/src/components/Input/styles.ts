import styled from 'styled-components/native';
import { Sae } from 'react-native-textinput-effects';

import colors from '../../utils/colors';

export const Container = styled.View`
  min-height: 70px;
  width: 100%;
  /* justify-content: ; */

  margin: 0;
`;

export const TextInput = styled(Sae)`
  height: 100%;
  color: ${colors.placeholder};
  font-weight: bold;
  font-style: italic;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;
