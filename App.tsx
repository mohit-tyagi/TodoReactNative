import React from 'react';

import Todos from './Pages/Todos/Todos';
import About from './Pages/About/About';
import TaskDetails from './Pages/TaskDetails/TaskDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Todos">
        <Stack.Screen name="Todos" component={Todos} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
