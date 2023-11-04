import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxObjectScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title} >Box Oject Screen</Text>
    </View>
  );
};

export default BoxObjectScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#670f0f',
  },
  title:{
    fontSize: 50,
    color: '#d0d0d0',
    textAlign: 'center',
    paddingTop: 30,
  },
});
