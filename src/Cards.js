import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import CardsImage from './CardsImage';
import CardsLink from './CardsLink';
import CardsStatus from './CardsStatus';

export default class Cards extends React.Component {
    
    render(){
        

       return( 
           <View style={styles.holder}>
               <View style={styles.imageContainer}><CardsImage email = {this.props.name.creator.email}/></View>
           
           <View style={styles.container}>
           <Text style={styles.heading}>{this.props.name.summary}</Text>
           <CardsStatus date = {this.props.name.start.dateTime}/>
           <Text><Text style={styles.startDate}>Start Date:</Text> {moment(this.props.name.start.dateTime).format('D MMMM YYYY HH:mm Z')}</Text>
           <Text><Text style={styles.endDate}>End Date:</Text> {moment(this.props.name.end.dateTime).format('D MMMM YYYY HH:mm Z')}</Text>
           <CardsLink data={this.props.name}/>
        </View>
        </View>
     );
    }

}


const styles = StyleSheet.create({
    holder:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor:'#ddd',
        borderBottomWidth: 0,
        shadowColor:'#000',
        shadowOffset:{width:0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'

    },
    container: {
        flex:1,
        flexDirection: 'column' ,
        justifyContent: 'space-around'
      },    
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
      },
      startDate:{
          color : '#4CAF50'
      },
      endDate:{
        color : '#f44336'
    }
    })