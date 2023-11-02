import React from 'react';
import { Text, TouchableOpacity, Platform, TouchableNativeFeedback, View, StyleSheet} from 'react-native';

interface FloatingButtonProps {
  text: string;
  value: number;
  position?: 'left' | 'right';
  handler: (value: number) => void;
}

const FloatingButton = ({ text, value, position = 'left', handler}: FloatingButtonProps) => {

  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={ 0.8 }
        onPress={() => handler(value)}
        style={position === 'left' ? styles.fabLocationBL : styles.fabLocationBR}
      >
        <View style={styles.fab}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
      style={position === 'left' ? styles.fabLocationBL : styles.fabLocationBR}>
        <TouchableNativeFeedback
          onPress={() => handler(value)}
          background={TouchableNativeFeedback.Ripple('#qqqqqq', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.buttonText}>{text}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

export default FloatingButton;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  fab: {
    backgroundColor: '#20599f',
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#8aabd4',
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.7,
    shadowRadius: 8.3,
    elevation: 5,
  },
});
