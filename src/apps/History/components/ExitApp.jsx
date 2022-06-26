import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Image, Button, Text, Alert, TouchableOpacity } from 'react-native';

import styles from './../styles/components/ExitApp.style'

export const ExitApp = ({ navigation }) => {


  const backToSuperApp = () => {
    navigation.navigate('main')
  }

  return (
    <View style={styles.exitApp}>

      <TouchableOpacity
        style={styles.menu}
        onPress={backToSuperApp}>

        <View style={styles.user}>

          <Icon
            name="chevron-back"
            color='#333333'
            size={25}
            style={styles.back}
          />

          <View style={styles.userInfo}>
            <Text style={styles.greeting}>Go Back to</Text>
            <Text style={styles.userName}>NBE Online</Text>
          </View>
        </View>

      </TouchableOpacity>
    </View>
  )
}