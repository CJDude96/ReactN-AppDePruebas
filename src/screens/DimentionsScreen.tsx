import React from 'react';
import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';

const DimentionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <Text>Dimentions</Text>
        <View style={{...styles.purpleBox, width: width * 0.5}} />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

export default DimentionsScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'cyan',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
