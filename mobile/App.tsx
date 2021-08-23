import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from './src/utils/colors';
import Routes from './src/routes'
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import { BaseToast, BaseToastProps } from 'react-native-toast-message';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Routes />
          <StatusBar style="auto" />
          <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
        </View>
      </PersistGate>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

interface ToastProps extends BaseToastProps{
  text1: string;
  text2: string;
}

const toastConfig = {
  success: ({ text1, text2, ...rest }: ToastProps) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'green', height: 'auto' }}
      contentContainerStyle={{ padding: 16 }}
      text1Style={{
        fontSize: 20,
        fontWeight: 'bold'
      }}
      text2Style={{
        fontSize: 18,
        fontWeight: 'bold'
      }}
      text1={text1}
      text2={text2}
    />
  ),
  error: ({ text1, text2, ...rest }: ToastProps) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'red', height: 'auto' }}
      contentContainerStyle={{ padding: 16 }}
      text1Style={{
        fontSize: 20,
        fontWeight: 'bold'
      }}
      text2Style={{
        fontSize: 18,
        fontWeight: 'bold'
      }}
      text1={text1}
      text2={text2}
    />
  ),
  warning: ({ text1, text2, ...rest }: ToastProps) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'yellow', height: 'auto' }}
      contentContainerStyle={{ padding: 16 }}
      text1Style={{
        fontSize: 20,
        fontWeight: 'bold'
      }}
      text2Style={{
        fontSize: 18,
        fontWeight: 'bold'
      }}
      text1={text1}
      text2={text2}
    />
  )
};
