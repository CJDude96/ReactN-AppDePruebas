import React from 'react';
import { SafeAreaView } from 'react-native';
import PositionScreen from './src/screens/PositionScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import BoxObjectScreen from './src/screens/BoxObjectScreen';
// import DimentionsScreen from './src/screens/DimentionsScreen';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <CounterScreen /> */}
      {/* <BoxObjectScreen /> */}
      {/* <DimentionsScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;
