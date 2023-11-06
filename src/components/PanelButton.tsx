import React from 'react';
import {TouchableNativeFeedback, View, Text, StyleSheet} from 'react-native';

interface Props {
  value: number;
  handler: (value: number) => void;
}

const PanelButton = ({value, handler}: Props) => {
  return (
    <View>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#qqqqqq', false, 30)}
        onPress={() => handler(value)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{value}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default PanelButton;

const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    backgroundColor: '#23b7d5',
    borderRadius: 100,
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
