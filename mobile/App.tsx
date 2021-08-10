import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from './src/utils/colors';
import Routes from './src/routes'

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
