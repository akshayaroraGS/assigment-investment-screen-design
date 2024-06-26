import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default App;
