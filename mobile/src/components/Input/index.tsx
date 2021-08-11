import React, { useState } from 'react';
import { Container, TextInput, ErrorText } from './styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import colors from '../../utils/colors';

interface InputProps {
  label: string;
  type: string;
  value: string;
  error?: string;
  onChangeText: (value: string) => void;
}

const index = ({ label, type, value, onChangeText, error }: InputProps) => {
  const [focus, setFocus] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Container>
      <TextInput
        label={label}
        iconClass={FontAwesomeIcon}
        iconName=''
        iconColor={colors.border}
        inputStyle={{
          paddingBottom: 17,
          paddingLeft: 26,
          paddingRight: 65,
          color: colors.placeholder,
          fontSize: 15,
        }}
        labelStyle={{
          marginBottom: 17,
          paddingLeft: 26,
          color: colors.placeholder,
          fontSize: 15,
          fontWeight: 'bold',
        }}
        value={value}
        secureTextEntry={type === 'password' ? hidePassword : false}
        inputPadding={16}
        labelHeight={6}
        onChangeText={onChangeText}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        borderHeight={0}
        autoCapitalize='none'
      />
      {type === 'password' && (
        <FontAwesomeIcon
          name='eye'
          size={24}
          color={hidePassword ? colors.iconsGray : colors.lightGreen}
          style={{
            position: 'absolute',
            top: 24,
            right: 31,
          }}
          onPress={() => setHidePassword(prevState => !prevState)}
        />
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  )
}

export default index;
