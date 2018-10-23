import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class CardsImage extends React.Component {
  render() {
    if (this.props.email === 'admin@codechef.com') {
      return (
        <Image
          style={styles.container}
          source={require('./images/logo-codechef.png')}
        />
      );
    } else if (this.props.email === 'calendar@hackerearth.com') {
      return (
        <Image
          style={styles.container}
          source={require('./images/logo-hacker.png')}
        />
      );
    } else {
      return (
        <Image
          style={styles.container}
          source={require('./images/logo-tcoder.png')}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
  },
});
