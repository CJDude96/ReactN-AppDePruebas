import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FloatingButton from '../components/FloatingButton';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const handlePress = (value: number) => {
    setCounter(counter + value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>

      <FloatingButton
        text="-1"
        position="left"
        value={-1}
        handler={handlePress}
      />
      <FloatingButton
        text="+1"
        position="right"
        value={1}
        handler={handlePress}
      />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adc',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -200,
  },
});
