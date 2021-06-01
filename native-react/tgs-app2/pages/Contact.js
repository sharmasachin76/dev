import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Contact(props){
    return(
        <View style={styles.container}>
           <Text style={{fontWeight: 'bold'}}>Tagore bal Shiksha Sadan</Text>
           <Text></Text>
           <Text style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. 
        </Text>
        <Text></Text>
          <Text style={{fontWeight: 'bold'}}> Tagore Junior High School</Text>
          <Text></Text>
          <Text style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. 
        </Text>
        <Text></Text>
          <Text style={{fontWeight: 'bold'}}> Maharani Lakshmi Bai Kanya Inter College</Text>
          <Text></Text>
          <Text style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. 
        </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      padding: 80,
      backgroundColor: 'lightblue',
      height: 750,
  
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignContent: "center",
    },
    button: {
      width: "90%",
    },
    header: {
      height: 100,
      
      //  borderColor: 'black',
      //  borderWidth: 1,
      
      justifyContent: "center",
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
  
export default Contact;
