import styled from 'styled-components/native';
import { Sae } from 'react-native-textinput-effects';

import colors from '../../utils/colors';

export const Container = styled.View`
  min-height: 70px;
  width: 100%;
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

export const ErrorText = styled.Text`
  color: ${colors.errorRed};
  margin: 0 26px;
`;
