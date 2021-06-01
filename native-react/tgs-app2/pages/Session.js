import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Session(props){
    return(
        <View style={styles.container}>
           
            <Text style={{textAlign:'center',fontWeight:'bold'} }>Academic Session</Text>
            <Text style={{textAlign:'justify'}}> Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      padding: 80,
      backgroundColor: 'lightblue',
      height: 750,
  
      flexDirection: "column",
      justifyContent: "space-between",
      alignContent: "center",
    },
    button: {
      width: "90%",
    },
    header: {
      height: 100,
      
      //  borderColor: 'black',
      //  borderWidth: 1,
      
      justifyContent: "space-between",
      alignContent: "center"
    },
    tinyLogo: {
      width: 50,
      height: 50,
      borderColor: 'black',
      borderWidth:1,
      borderRadius: 5,
      justifyContent: 'center',
      alignContent: "center"
  
    },
    logo: {
      flexDirection:'row',
      justifyContent: 'space-evenly',
      alignContent: "center"
  
    }
  });
  

export default Session;
