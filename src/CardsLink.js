import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default class CardsLink extends React.Component {

    render() {
        if (this.props.data.creator.email === "admin@codechef.com") {
            return (<View style={styles.linkContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(this.props.data.location)}>
                    <Image style={styles.linkImage} source={require('./images/logo-url.png')} />
                </TouchableOpacity>
            </View>
            );
        }
        else if (this.props.data.creator.email === "calendar@hackerearth.com") {
            return (<View style={styles.linkContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(this.props.data.location)}>
                    <Image style={styles.linkImage} source={require('./images/logo-url.png')} />
                </TouchableOpacity>
            </View>
            );
        }
        else {
            return (<View style={styles.linkContainer}>
                <TouchableOpacity onPress={() => Linking.openURL("https://topcoder.com")}>
                    <Image style={styles.linkImage} source={require('./images/logo-url.png')} />
                </TouchableOpacity>
            </View>
            );
        }
    }

}

const styles = {
    linkImage: {
        height: 25,
        width: 25
    },
    linkContainer:
    {
        alignItems: 'center',
        marginTop: 5
    }
}