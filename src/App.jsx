import React, { Suspense } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//apps
import Main from './apps/_Main';
const Accounts = React.lazy(() => import('./apps/Accounts'));
const Cards = React.lazy(() => import('./apps/Cards'));
const Utils = React.lazy(() => import('./apps/Utils'));
const History = React.lazy(() => import('./apps/History'));

const Stack = createNativeStackNavigator();

export const App = () => {

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="accounts" component={Accounts} options={{ headerShown: false }} />
          <Stack.Screen name="cards" component={Cards} options={{ headerShown: false }} />
          <Stack.Screen name="utils" component={Utils} options={{ headerShown: false }} />
          <Stack.Screen name="history" component={History} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
};