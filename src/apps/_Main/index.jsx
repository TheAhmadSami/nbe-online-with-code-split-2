import React from 'react';
import { View, StatusBar } from 'react-native';
import { Balance, More, SendMoney, TopBar, Navigator } from './components'

import styles from './styles/Main.style'

const Main = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle='dark-content' backgroundColor='#F1F3FB' />

      <View>
        <TopBar />
        <Balance />
        <More navigation={navigation} />
        <SendMoney />
      </View>

      <Navigator></Navigator>
    </View>
  )
}

export default Main;