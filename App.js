import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import Main from './src/Main';
import AboutUs from './src/AboutUs';
import {DrawerNavigator} from 'react-navigation';


const Drawer  = DrawerNavigator(
      {
         Home: {
           path:'/',
           screen: Main,
         },
         About: {
           path:'/sent',
           screen: AboutUs
         }
      },
      {
         initialRouteName:'Home',
         drawerPosition:'left'
      }
);

export default Drawer;






// export default class App extends React.Component {


//   render() {
 
 
//     return (
//       <View style={styles.viewStyl}>
//      <StatusBar hidden={true}/>
//      <ToolbarAndroid style={styles.toolbar}
//      title='CodeCal'/>
//     <View >
//       <Main/>
//       </View>
    //   <View>
    //   <FacebookAds.BannerView
    //     placementId="241820056358153_241823043024521"
    //     type="standard"
    //     onPress={() => console.log('click')}
    //     onError={(err) => console.log('error', err)}
    //   />
    // </View>
//       </View>
//     );
//    }
 
// }

// const styles = StyleSheet.create({
//     toolbar: {
//       height : 50
//     },
//     viewStyle:{
//       flex:1
//     }
//     }
// )


   