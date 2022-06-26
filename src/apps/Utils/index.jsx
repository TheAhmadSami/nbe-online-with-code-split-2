import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { register } from 'react-native-bundle-splitter';

export default register({
  loader: () => import('./Utils'),
  placeholder: () => (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#F6A721" />
    </View>
  ),
});
