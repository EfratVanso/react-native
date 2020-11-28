import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BoxScreen() {
  return (
    <View style={styles.view}>
      <Text style={styles.s1 }>sibling 1</Text>
      <Text style={styles.s2,styles.s}>sibling 2</Text>
      <Text style={styles.s3}>sibling 3</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
justifyContent:"space-around"
  },
  s: {
    borderColor: "blue",
    borderWidth: 2,
    padding: 10,
    
  },
  s1: {
    alignSelf:"flex-end",
    borderColor: "blue",
    borderWidth: 2,
    padding: 10,
  },
  s2: {
    alignSelf:"flex-end",
    borderColor: "red",
    borderWidth: 2,
    padding: 10,
    alignSelf: "center",
    position:"absolute"
  },
  s3: {
    alignSelf:"flex-start",
    borderColor: "blue",
    borderWidth: 2,
    padding: 10,
    top:0,
    position:"absolute"
  },
});
