// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Chat from './components/conversation';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChatGPT Frontend</Text>
      <Chat />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default index;
