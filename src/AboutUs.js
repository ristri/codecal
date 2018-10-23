import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Button,
  TouchableOpacity,
  Linking,
  Image,
  Share,
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { AdMobBanner } from 'react-native-admob';

export default class AboutUs extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'About Us',
    drawerIcon: ({ tintColor }) => {
      return (
        <FontAwesome style={{ color: tintColor, fontSize: 24 }}>
          {Icons.group}
        </FontAwesome>
      );
    },
  };

  ShareMessage = () => {
    Share.share({
      message:
        'Download CodeCal:Coding Calender from http://go.ristri.com/codecal',
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <View style={styles.holder}>
          <View style={styles.icon}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <FontAwesome style={{ color: '#fff', fontSize: 40 }}>
                {Icons.bars}
              </FontAwesome>
            </TouchableOpacity>
          </View>

          <View style={styles.heading}>
            <Text style={styles.headingStyle}>About Us</Text>
          </View>
        </View>
        <View>
          <View style={styles.avatarCard}>
            <View>
              <Image
                style={styles.container}
                source={require('./images/myAvatar.png')}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.avatarHeading}>Rishabh Tripathi</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://ristri.com')}
              >
                <FontAwesome style={{ fontSize: 40 }}>
                  {Icons.globe}
                </FontAwesome>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.avatarCard}>
            <View>
              <Image
                style={styles.container}
                source={require('./images/myAvatar-2.png')}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.avatarHeading}>Hridyansh Sahu</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://hridyanshsahu.com')}
              >
                <FontAwesome style={{ fontSize: 40 }}>
                  {Icons.globe}
                </FontAwesome>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.ShareMessage} title="Share this app" />
        </View>
        <View style={styles.adView}>
          <AdMobBanner
            adSize="banner"
            adUnitID="ca-app-pub-8934020675572165/2607982129"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  holder: {
    //   borderWidth: 1,
    //   borderRadius: 2,
    //   borderColor:'#ddd',
    //   borderBottomWidth: 0,
    //   shadowColor:'#000',
    //   shadowOffset:{width:0, height: 2},
    //   shadowOpacity: 0.2,
    //   shadowRadius:2,
    elevation: 1,
    //   borderBottomWidth: 1,
    //   padding: 5,
    backgroundColor: '#007aff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headingStyle: {
    fontSize: 20,
    color: '#fff',
  },
  container: {
    height: 100,
    width: 100,
  },
  avatarCard: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#E0E0E0',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
  avatarHeading: {
    fontSize: 24,
  },
  nameContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  adView: {
    alignItems: 'center',
  },
};
