import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { register } from 'react-native-bundle-splitter';

export default register({
  loader: () => import('./Accounts'),
  placeholder: () => (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#00C974" />
    </View>
  ),
});
