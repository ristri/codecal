import React from 'react';
import { StyleSheet,StatusBar, View ,Text,Button, TouchableOpacity,ActivityIndicator} from 'react-native';
import axios from 'axios';
import Cardholder from './Cardholder';
import moment from 'moment';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {AdMobBanner} from 'react-native-admob';



export default class Main extends React.Component {
    state = {tempArray:[]};
    
    componentWillMount(){
      axios.get('https://www.googleapis.com/calendar/v3/calendars/codechef.com_3ilksfmv45aqr3at9ckm95td5g%40group.calendar.google.com/events?timeMin='+moment().format('YYYY-MM-DD')+'T'+moment().format('HH')+'%3A'+moment().format('mm')+'%3A'+moment().format('ss')+'Z'+'&key=AIzaSyA-ubOtVIfN4NH9KgZuzHya72Elw_i4Yk8').then((response)=>this.setState({tempArray:this.state.tempArray.concat(response.data.items)}));//[...this.state.items, this.state.term]
    axios.get('https://www.googleapis.com/calendar/v3/calendars/appirio.com_bhga3musitat85mhdrng9035jg@group.calendar.google.com/events?timeMin='+moment().format('YYYY-MM-DD')+'T'+moment().format('HH')+'%3A'+moment().format('mm')+'%3A'+moment().format('ss')+'Z'+'&key=AIzaSyA-ubOtVIfN4NH9KgZuzHya72Elw_i4Yk8').then((response)=>this.setState({tempArray:this.state.tempArray.concat(response.data.items)}));
    axios.get('https://www.googleapis.com/calendar/v3/calendars/hackerearth.com_73f0o8kl62rb5v1htv19p607e4@group.calendar.google.com/events?timeMin='+moment().format('YYYY-MM-DD')+'T'+moment().format('HH')+'%3A'+moment().format('mm')+'%3A'+moment().format('ss')+'Z'+'&key=AIzaSyA-ubOtVIfN4NH9KgZuzHya72Elw_i4Yk8').then((response)=>this.setState({tempArray:this.state.tempArray.concat(response.data.items)}));
    }

    static navigationOptions = {
      tabBarLabel : 'Home',
      drawerIcon : ({tintColor})=>{
          return(
              // <MaterialIcons 
              // name="home" size={24} style={{color:tintColor}}>
              // </MaterialIcons>
              <FontAwesome style={{color:tintColor,fontSize:24}}>{Icons.home}</FontAwesome>
          );
      }
  }

    render() {
      if(this.state.tempArray.length===0)
      {
        return (
          <View style={styles.wait}><ActivityIndicator size='large'/></View>
        )
      }
      else{
      return (
        <View style={styles.viewStyle}>
        <View style={styles.viewStyle}>
           <StatusBar hidden={true}/>
           <View style={styles.holder}>

           <View style={styles.icon}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
           <FontAwesome   style={{color:'#fff',fontSize:40}}>{Icons.bars}</FontAwesome>
           </TouchableOpacity>
          </View>
            
            <View style={styles.heading}>
               <Text style={styles.headingStyle}>CodeCal</Text>
            </View>

            </View>
            
        <View style={styles.viewStyle} >
        <Cardholder data={this.state.tempArray}/>
            </View>
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
    }}

    const styles = {
      viewStyle:{
         flex:1
      },
      holder:{
        // borderWidth: 1,
        // borderRadius: 2,
        // borderColor:'#ddd',
        // borderBottomWidth: 0,
        // shadowColor:'#000',
        // shadowOffset:{width:0, height: 2},
        // shadowOpacity: 0.2,
        // shadowRadius:2,
        elevation:1,
            // borderBottomWidth: 1,
            // padding: 5,
            backgroundColor: '#007aff',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
      },
      icon:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
       },
      heading:{
        justifyContent: 'center',
        alignItems: 'flex-start'
        
      },
      headingStyle:{
        fontSize:20,
        color:'#fff'
      },
    adView:{
      alignItems:'center'
  },
  wait:{
    flex:1,
    alignItems:'center',
    justifyContent : 'center'
  }
    }
  
  