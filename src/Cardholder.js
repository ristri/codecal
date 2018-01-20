import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Cards from './Cards';

export default class Cardholder extends React.Component {


    render(){
        this.props.data.sort(function(a,b){
            if(a.start.dateTime>b.start.dateTime)
              return 1;
            else
              return -1;
        });
        //console.log(this.props.data);
         const cardlist = this.props.data.map((item,i)=>
         <Cards name={item} key={i}/> );
     
       return(
          
           <ScrollView style={styles.back}>
               {cardlist}
               
            </ScrollView>
       );

    }

    }

    const styles ={
        back:{
            backgroundColor:'#E0E0E0'
        }
    }
