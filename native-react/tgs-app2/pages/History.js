import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

function History(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 14, color: "darkblue", fontWeight: "bold" }}>
            Tagore Group of Schools - A Glance
          </Text>
        </View>
        <View style={styles.pic}>
          <Image
            style={styles.tinyLogo}
            source={require("../image/m.jpg")}
          />
        </View>
        <View style={styles.text}>
          <Text style={{fontWeight: 'bold'}}>B.S. Sharma</Text>
          <Text style={{fontWeight: 'bold'}}> Founder</Text>
         
        </View>
        <Text></Text>
        <Text style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text></Text>
        <View style={styles.pic}>
          <Image
            style={styles.tinyLogo}
            source={require("../image/Anil2.jpg")}
          />
        </View>
        <View style={styles.text}>
          <Text style={{fontWeight: 'bold'}}>Anil Sharma</Text>
          <Text style={{fontWeight: 'bold'}}> Managing Director</Text>
        </View>
        <Text></Text>
        <Text style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text></Text>
        <View style={styles.pic}>
          <Image
            style={styles.tinyLogo}
            source={require("../image/Seema.jpg")}
          />
        </View>
        <View style={styles.text}>
          <Text style={{fontWeight: 'bold'}}>Seema Sharma</Text>
          <Text style={{fontWeight: 'bold'}}> Principal </Text>
        </View>
        <Text></Text>
        <Text style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text></Text>
        <View style={styles.pic}>
          <Image
            style={styles.tinyLogo}
            source={require("../image/Shikhar.jpg")}
          />
        </View>
        <View style={styles.text}>
          <Text style={{fontWeight: 'bold'}}> Shikhar Bhardwaj</Text>
          <Text style={{fontWeight: 'bold'}}> Manager</Text>
        </View>
        <Text></Text>
        <Text style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text></Text>
        <View style={styles.pic}>
          <Image
            style={styles.tinyLogo}
            source={require("../image/prakhar2.jpg")}
          />
        </View>
        <View style={styles.text}>
          <Text style={{fontWeight: 'bold'}}>Prakhar </Text>
          <Text style={{fontWeight: 'bold'}}>Marketing Advisor</Text>
        </View>
        <Text></Text>
        <Text style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 80,
    backgroundColor: "lightblue",
    height: 3000,

    flexDirection: "column",
     justifyContent: "space-evenly",
    alignContent: "center",
  },
  button: {
    width: "90%",
  },
  header: {
    height: 100,
    justifyContent: "space-between",
    alignContent: "center",
  },
  tinyLogo: {
    width: 120,
    height: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignContent: "center",
  },
  pic: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  dtl: {
    textAlign: "justify",
  },
});

export default History;
