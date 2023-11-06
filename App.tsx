import React from 'react';
import { SafeAreaView } from 'react-native';
import PruebaScreen from './src/screens/PruebaScreen';
// import FlexScreen from './src/screens/FlexScreen';
// import PositionScreen from './src/screens/PositionScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import BoxObjectScreen from './src/screens/BoxObjectScreen';
// import DimentionsScreen from './src/screens/DimentionsScreen';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <CounterScreen /> */}
      {/* <BoxObjectScreen /> */}
      {/* <DimentionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <PruebaScreen />
    </SafeAreaView>
  );
};

export default App;
