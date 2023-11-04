import React from 'react';
import {View, StyleSheet} from 'react-native';

const PositionScreen = () => {
  const {container, boxSize, boxBorder, redBox, greenBox, blueBox, yellowBox} =
    styles;
  return (
    <View style={container}>
      <View style={[boxSize, boxBorder, redBox]} />
      <View style={[boxSize, boxBorder, greenBox]} />
      <View style={[boxSize, boxBorder, blueBox]} />
      <View style={[boxSize, boxBorder, yellowBox]} />
    </View>
  );
};

export default PositionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c4d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxSize: {
    width: 100,
    height: 100,
  },
  boxBorder: {
    borderWidth: 10,
    borderBlockColor: 'white',
  },
  redBox: {
    backgroundColor: 'red',
    top: 0,
    marginHorizontal: 'auto',
    position: 'absolute',
  },
  greenBox: {
    backgroundColor: 'green',
    top: 50,
    left: 50,
  },
  blueBox: {
    backgroundColor: 'blue',
    top: -50,
    left: -50,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    bottom: 0,
    marginHorizontal: 'auto',
    position: 'absolute',
  },
});
