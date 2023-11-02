import React from 'react';
import { View, Text } from 'react-native';

const HolaMundoSreen = () => {
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#adc',
        justifyContent: 'center',
      }}>
        <Text style={{
          fontSize: 30,
          textAlign: 'center',
        }}>
          Hola Mundo 2
        </Text>
    </View>
  );
};

export default HolaMundoSreen;
