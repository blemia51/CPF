
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Button from './components/Button';
import Counter from './components/Counter';

const Stack = createStackNavigator();

function Navigation() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#0c5266',
              height: 100,
            },
            headerLeft: () => <Counter />,
            headerRight: () => <Button size='sm' title='stop' color='#1e214e' backgroundColor="#d5e746" />,
            headerTintColor: '#1e214e',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
