import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button , Image} from "react-native";


export default function Home(props) {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
      <View style={styles.logo}> 
        <Image style={styles.tinyLogo} source={require('../image/20200703_105013.jpg')}/>
        <Image style={styles.tinyLogo} source={require('../image/20200703_105038.jpg')}/>
        </View>
       
        <Text style={{fontSize: 20, color: 'darkblue',
    fontWeight:'bold'}}>Tagore Group of Schools</Text>
      </View>

      <View style={styles.button}>
        <Button title="Tagore Group - A Glance" onPress={()=>{
            props.navigation.navigate({routeName: 'History'});
        }}/>
      </View>
      <View style={styles.button}>
        <Button title="Sailent Features" onPress={()=>{
            props.navigation.navigate({routeName: 'Feature'});
        }}/>
      </View>
      <View style={styles.button}>
        <Button title="Academic Session" onPress={()=>{
            props.navigation.navigate({routeName: 'Session'});
        }}/>
      </View>
      <View style={styles.button}>
        <Button title="Important Notices" onPress={()=>{
            props.navigation.navigate({routeName: 'Notice'});
        }}/>
      </View>
      <View style={styles.button}>
        <Button title="Contact Us" onPress={()=>{
            props.navigation.navigate({routeName: 'Contact'});
        }}/>
      </View>
      <StatusBar style="auto" />
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
