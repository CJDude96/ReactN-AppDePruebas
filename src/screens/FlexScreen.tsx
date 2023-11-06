import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

export default FlexScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row-reverse',
        backgroundColor: '#1fc8de',
        justifyContent:'space-evenly',
        alignItems: 'center',
    },
    caja1:{
        borderWidth:2,
        borderColor: 'purple',
        fontSize: 20,
        alignSelf: 'stretch',
    },
    caja2:{
        borderWidth:2,
        borderColor: 'purple',
        fontSize: 20,
    },
    caja3:{
        borderWidth:2,
        borderColor: 'purple',
        fontSize: 20,
    },
});
