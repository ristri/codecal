import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import moment from 'moment';

export default class CardsStatus extends React.Component {
  render() {
    if (moment(this.props.date) < moment()) {
      return (
        <View style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Live</Text>
        </View>
      );
    } else {
      return <View />;
    }
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 2,
    paddingRight: 2,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};
