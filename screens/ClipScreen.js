import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ClipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ClipScreen</Text>
    </SafeAreaView>
  );
};
