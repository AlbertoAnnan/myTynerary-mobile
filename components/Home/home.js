import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageLogo from './imageLogo.js'
//import { createBottomTabNavigator } from 'react-navigation';
import Slider from './carousel.js'
import ButtonLogin from '../nav/buttonLogin.js'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonLogin />
        <ImageLogo />
        <Slider />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%'
  }
});
