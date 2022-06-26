import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//apps
import Main from './apps/_Main';
import Accounts from './apps/Accounts';
import Cards from './apps/Cards';
import Utils from './apps/Utils';
import History from './apps/History';

const Stack = createNativeStackNavigator();

export const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="accounts" component={Accounts} options={{ headerShown: false }} />
        <Stack.Screen name="cards" component={Cards} options={{ headerShown: false }} />
        <Stack.Screen name="utils" component={Utils} options={{ headerShown: false }} />
        <Stack.Screen name="history" component={History} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};